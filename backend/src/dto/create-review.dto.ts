import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsNotEmpty, Min, Max } from 'class-validator';

export class CreateReviewDto {
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  movieId: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  reviewerName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  comment: string;

  @ApiProperty({ minimum: 1, maximum: 5 })
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;
}

