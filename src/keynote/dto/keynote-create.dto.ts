import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty, IsString, Max,
  Min, IsNumber, IsUUID, IsOptional,
} from 'class-validator';

export class KeynoteCreateDto {

  @ApiPropertyOptional({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' })
  @IsUUID()
  @IsOptional()
  public readonly hash: string;

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
