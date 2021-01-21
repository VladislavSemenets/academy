import { PartialType } from '@nestjs/mapped-types';
import { VideoCreateDto } from './video-create.dto';

export class VideoUpdateDto extends PartialType(VideoCreateDto) { }
