import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Pagination } from '../../common/utils/pagination/pagination';

import { KeynoteCreateDto } from '../dto/keynote-create.dto';
import { KeynoteDto } from '../dto/keynote.dto';
import { KeynoteUpdateDto } from '../dto/keynote-update.dto';

import { IKeynote, Keynote } from '../schema/keynote.schema';

@Injectable()
export class KeynoteService {

  constructor(
    @InjectModel(Keynote.name) private readonly _keynoteModel: Model<IKeynote>,
  ) { }

  public async list(
    limit = 10,
    page = 1
  ): Promise<Pagination.PaginationData<KeynoteDto>> {
    const { docs: results, totalDocs: total, totalPages } =  await this._keynoteModel['paginate']({ }, {
      select: 'title hash order uri -_id',
      lean: true,
      limit,
      page
    });

    return new Pagination.PaginationData<KeynoteDto>({ results, total, totalPages });
  }

  public async create(keynoteCreateDto: KeynoteCreateDto): Promise<{ hash: string }> {
    const keynote = new this._keynoteModel({ ...keynoteCreateDto, hash: uuidv4() });
    const { hash } = await keynote.save();

    return { hash }
  }

  public async update(hash: string, keynoteUpdateDto: KeynoteUpdateDto): Promise<KeynoteDto> {
    return this._keynoteModel.findOneAndUpdate({ hash }, keynoteUpdateDto, { new: true, lean: true })
      .select('title order uri -_id');
  }

  public async find(options: any): Promise<KeynoteDto> {
    return this._keynoteModel.findOne(options).select('title hash order uri -_id');
  }

  public async delete(hash: string): Promise<void> {
    await this._keynoteModel.findOneAndDelete({ hash });
  }

}
