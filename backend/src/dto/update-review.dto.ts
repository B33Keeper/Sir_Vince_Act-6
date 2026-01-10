import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsOptional, Min, Max } from 'class-validator';

export class UpdateReviewDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  reviewerName?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  comment?: string;

  @ApiProperty({ required: false, minimum: 1, maximum: 5 })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5)
  rating?: number;
}

