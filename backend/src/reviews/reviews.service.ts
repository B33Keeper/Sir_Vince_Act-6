import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from '../entities/review.entity';
import { Movie } from '../entities/movie.entity';
import { CreateReviewDto } from '../dto/create-review.dto';
import { UpdateReviewDto } from '../dto/update-review.dto';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private reviewsRepository: Repository<Review>,
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
  ) {}

  async create(createReviewDto: CreateReviewDto): Promise<Review> {
    const movie = await this.moviesRepository.findOne({
      where: { id: createReviewDto.movieId },
    });

    if (!movie) {
      throw new NotFoundException(
        `Movie with ID ${createReviewDto.movieId} not found`,
      );
    }

    const review = this.reviewsRepository.create(createReviewDto);
    const savedReview = await this.reviewsRepository.save(review);

    // Calculate and update average rating
    await this.updateAverageRating(createReviewDto.movieId);

    return savedReview;
  }

  async findAll(): Promise<Review[]> {
    return await this.reviewsRepository.find({
      relations: ['movie'],
      order: { createdAt: 'DESC' },
    });
  }

  async findByMovieId(movieId: number): Promise<Review[]> {
    return await this.reviewsRepository.find({
      where: { movieId },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Review> {
    const review = await this.reviewsRepository.findOne({
      where: { id },
      relations: ['movie'],
    });
    if (!review) {
      throw new NotFoundException(`Review with ID ${id} not found`);
    }
    return review;
  }

  async update(id: number, updateReviewDto: UpdateReviewDto): Promise<Review> {
    const review = await this.findOne(id);
    Object.assign(review, updateReviewDto);
    const updatedReview = await this.reviewsRepository.save(review);

    // Recalculate average rating after update
    await this.updateAverageRating(review.movieId);

    return updatedReview;
  }

  async remove(id: number): Promise<void> {
    const review = await this.findOne(id);
    const movieId = review.movieId;
    await this.reviewsRepository.remove(review);

    // Recalculate average rating after deletion
    await this.updateAverageRating(movieId);
  }

  private async updateAverageRating(movieId: number): Promise<void> {
    const result = await this.reviewsRepository
      .createQueryBuilder('review')
      .select('AVG(review.rating)', 'average')
      .where('review.movieId = :movieId', { movieId })
      .getRawOne();

    const averageRating = result?.average
      ? parseFloat(result.average)
      : 0;

    await this.moviesRepository.update(movieId, {
      averageRating: Number(averageRating.toFixed(2)),
    });
  }
}

