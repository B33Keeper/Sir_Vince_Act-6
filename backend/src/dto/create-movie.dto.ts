import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsOptional, Min, Max } from 'class-validator';

export class CreateMovieDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  director: string;

  @ApiProperty()
  @IsInt()
  @Min(1888)
  @Max(new Date().getFullYear() + 10)
  releaseYear: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;
}

