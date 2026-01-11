import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from './movies/movies.module';
import { ReviewsModule } from './reviews/reviews.module';
import { UsersModule } from './users/users.module';
import { Movie } from './entities/movie.entity';
import { Review } from './entities/review.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'movie_reviews.db',
      entities: [Movie, Review, User],
      synchronize: true,
    }),
    MoviesModule,
    ReviewsModule,
    UsersModule,
  ],
})
export class AppModule {}

