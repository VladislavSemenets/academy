import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Pagination } from '../../common/utils/pagination/pagination';

import { VideoCreateDto } from '../dto/video-create.dto';
import { VideoDto } from '../dto/video.dto';
import { VideoUpdateDto } from '../dto/video-update.dto';

import { IVideo, Video } from '../schema/video.schema';

@Injectable()
export class VideoService {

  constructor(
    @InjectModel(Video.name) private readonly _videoModel: Model<IVideo>,
  ) { }

  public async list(
    limit = 10,
    page = 1
  ): Promise<Pagination.PaginationData<VideoDto>> {
    const { docs: results, totalDocs: total, totalPages } =  await this._videoModel['paginate']({ }, {
      select: 'title hash order uri -_id',
      lean: true,
      limit,
      page
    });

    return new Pagination.PaginationData<VideoDto>({ results, total, totalPages });
  }

  public async create(videoCreateDto: VideoCreateDto): Promise<{ hash: string }> {
    const video = new this._videoModel({ ...videoCreateDto, hash: uuidv4() });
    const { hash } = await video.save();

    return { hash }
  }

  public async update(hash: string, videoUpdateDto: VideoUpdateDto): Promise<VideoDto> {
    return this._videoModel.findOneAndUpdate({ hash }, videoUpdateDto, { new: true, lean: true })
      .select('title order uri -_id');
  }

  public async find(options: any ): Promise<VideoDto> {
    return this._videoModel.findOne(options).select('title hash order uri -_id');
  }

  public async delete(hash: string): Promise<void> {
    await this._videoModel.findOneAndDelete({ hash });
  }

}
