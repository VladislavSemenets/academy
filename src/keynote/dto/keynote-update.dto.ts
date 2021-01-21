import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString, Max,
  Min, IsNumber, IsOptional,
} from 'class-validator';

export class KeynoteUpdateDto {

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
