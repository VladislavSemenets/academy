import {
  Controller, Req, Post,
  Body, Request, Get,
  Param, Query, Put,
  HttpCode, HttpStatus, Delete,
  NotFoundException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Pagination } from '../../common/utils/pagination/pagination';

import { KeynoteService } from '../service/keynote.service';
import { KeynoteDto } from '../dto/keynote.dto';
import { KeynoteCreateDto } from '../dto/keynote-create.dto';
import { KeynoteUpdateDto } from '../dto/keynote-update.dto';

@ApiTags('Keynotes')
@Controller('keynotes')
export class KeynoteController {
  constructor(private readonly _keynoteService: KeynoteService) { }

  @Get('')
  public async index(
    @Query() query: Pagination.IPaginationOptions,
  ): Promise<Pagination.PaginationData<KeynoteDto>> {
    return await this._keynoteService.list(query.limit, query.page);
  }

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  public async create(
    @Body() keynoteCreateDto: KeynoteCreateDto,
    @Req() request: Request,
  ): Promise<{ hash: string }> {
    return await this._keynoteService.create(keynoteCreateDto);
  }

  @Put(':hash')
  public async update(
    @Param('hash') hash: string,
    @Body() keynoteUpdateDto: KeynoteUpdateDto,
  ): Promise<KeynoteDto> {
    return await this._keynoteService.update(hash, keynoteUpdateDto);
  }

  @Get(':hash')
  public async find(
    @Param('hash') hash: string,
    @Req() request: Request,
  ): Promise<{ data: KeynoteDto }> {
    const data = await this._keynoteService.find({ hash });

    if (!data) {
      throw new NotFoundException({
        error: 'Not found',
        message: ['Keynote not found']
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
    await this._keynoteService.delete(hash);
  }

}
