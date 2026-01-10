import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Movie } from './movie.entity';

@Entity('reviews')
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movieId: number;

  @ManyToOne(() => Movie, (movie) => movie.reviews, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'movieId' })
  movie: Movie;

  @Column()
  reviewerName: string;

  @Column({ type: 'text' })
  comment: string;

  @Column({ type: 'int' })
  rating: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}

