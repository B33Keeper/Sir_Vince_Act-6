import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { Movie } from '../entities/movie.entity';
import { SeederService } from '../database/seeder.service';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  controllers: [MoviesController],
  providers: [MoviesService, SeederService],
  exports: [MoviesService],
})
export class MoviesModule {}

