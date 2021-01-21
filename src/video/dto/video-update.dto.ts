import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty, IsString, Max,
  Min, IsNumber, IsUUID, IsOptional,
} from 'class-validator';

export class VideoUpdateDto {

  @ApiPropertyOptional({ example: 'Node.js introduction' })
  @IsOptional()
  @IsString()
  public readonly hash: string;

  @ApiPropertyOptional({ example: 'Node.js introduction' })
  @IsOptional()
  @IsString()
  public readonly title: string;

  @ApiPropertyOptional({ example: '1' })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(999)
  public readonly order: number;

  @ApiPropertyOptional({ example: 'https://lectrum.io/videos/lesson-1' })
  @IsOptional()
  @IsString()
  public readonly uri: string;

}
