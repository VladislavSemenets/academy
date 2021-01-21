import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty, IsString, Max,
  Min, IsNumber, IsUUID, IsOptional,
} from 'class-validator';

export class VideoCreateDto {

  @ApiPropertyOptional({ example: 'Node.js introduction' })
  @IsNotEmpty()
  @IsString()
  public readonly title: string;

  @ApiPropertyOptional({ example: '1' })
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(999)
  public readonly order: number;

  @ApiPropertyOptional({ example: 'https://lectrum.io/videos/lesson-1' })
  @IsNotEmpty()
  @IsString()
  public readonly uri: string;

}
