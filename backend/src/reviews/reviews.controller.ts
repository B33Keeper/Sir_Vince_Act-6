import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from '../dto/create-review.dto';
import { UpdateReviewDto } from '../dto/update-review.dto';

@ApiTags('reviews')
@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new review' })
  @ApiResponse({ status: 201, description: 'Review successfully created and movie rating updated.' })
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.create(createReviewDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all reviews' })
  @ApiQuery({ name: 'movieId', required: false, type: Number, description: 'Filter reviews by movie ID' })
  @ApiResponse({ status: 200, description: 'Return all reviews or filtered by movieId.' })
  findAll(@Query('movieId') movieId?: string) {
    if (movieId) {
      return this.reviewsService.findByMovieId(parseInt(movieId, 10));
    }
    return this.reviewsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a review by ID' })
  @ApiResponse({ status: 200, description: 'Return the review.' })
  @ApiResponse({ status: 404, description: 'Review not found.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.reviewsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a review' })
  @ApiResponse({ status: 200, description: 'Review successfully updated and movie rating recalculated.' })
  @ApiResponse({ status: 404, description: 'Review not found.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateReviewDto: UpdateReviewDto,
  ) {
    return this.reviewsService.update(id, updateReviewDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a review' })
  @ApiResponse({ status: 200, description: 'Review successfully deleted and movie rating recalculated.' })
  @ApiResponse({ status: 404, description: 'Review not found.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.reviewsService.remove(id);
  }
}

