import {
  Controller, Req, Post,
  Body, Request, Get,
  Param, Query, Put,
  HttpCode, HttpStatus, Delete,
  NotFoundException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Pagination } from '../../common/utils/pagination/pagination';

import { VideoService } from '../service/video.service';
import { VideoDto } from '../dto/video.dto';
import { VideoCreateDto } from '../dto/video-create.dto';
import { VideoUpdateDto } from '../dto/video-update.dto';

@ApiTags('Videos')
@Controller('videos')
export class VideoController {
  constructor(private readonly _videoService: VideoService) { }

  @Get('')
  public async index(
    @Query() query: Pagination.IPaginationOptions,
  ): Promise<Pagination.PaginationData<VideoDto>> {
    return await this._videoService.list(query.limit, query.page);
  }

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  public async create(
    @Body() videoCreateDto: VideoCreateDto,
    @Req() request: Request,
  ): Promise<{ hash: string }> {
    return await this._videoService.create(videoCreateDto);
  }

  @Put(':hash')
  public async update(
    @Param('hash') hash: string,
    @Body() videoUpdateDto: VideoUpdateDto,
  ): Promise<VideoDto> {
    return await this._videoService.update(hash, videoUpdateDto);
  }

  @Get(':hash')
  public async find(
    @Param('hash') hash: string,
    @Req() request: Request,
  ): Promise<{ data: VideoDto }> {
    const data = await this._videoService.find({ hash });

    if (!data) {
      throw new NotFoundException({
        error: 'Not found',
        message: ['Video not found']
      });
    }

    return { data };
  }

  @Delete(':hash')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(
    @Param('hash') hash: string,
    @Req() request: Request,
  ): Promise<void> {
    await this._videoService.delete(hash);
  }

}
