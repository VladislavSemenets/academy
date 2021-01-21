import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ConfigModule } from '../config/config.module';

import { VideoController } from './controller/video.controller';
import { VideoService } from './service/video.service';
import { Video, VideoSchema } from './schema/video.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Video.name,
        useFactory: () => {
          const schema = VideoSchema;
          schema.plugin(require('mongoose-paginate-v2'));
          return schema;
        },
      },
    ]),
    HttpModule,
    ConfigModule
  ],
  controllers: [VideoController],
  providers: [VideoService]
})
export class VideoModule { }
