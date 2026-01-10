import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from '../entities/movie.entity';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const movie = this.moviesRepository.create(createMovieDto);
    return await this.moviesRepository.save(movie);
  }

  async findAll(): Promise<Movie[]> {
    return await this.moviesRepository.find({
      relations: ['reviews'],
      order: { id: 'ASC' },
    });
  }

  async search(query: string): Promise<Movie[]> {
    return await this.moviesRepository
      .createQueryBuilder('movie')
      .leftJoinAndSelect('movie.reviews', 'reviews')
      .where('movie.title LIKE :query', { query: `%${query}%` })
      .orWhere('movie.director LIKE :query', { query: `%${query}%` })
      .orWhere('movie.description LIKE :query', { query: `%${query}%` })
      .orderBy('movie.id', 'ASC')
      .getMany();
  }

  async findOne(id: number): Promise<Movie> {
    const movie = await this.moviesRepository.findOne({
      where: { id },
      relations: ['reviews'],
    });
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }

  async update(id: number, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    const movie = await this.findOne(id);
    Object.assign(movie, updateMovieDto);
    return await this.moviesRepository.save(movie);
  }

  async remove(id: number): Promise<void> {
    const movie = await this.findOne(id);
    await this.moviesRepository.remove(movie);
  }
}

