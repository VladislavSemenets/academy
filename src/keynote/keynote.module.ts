import { HttpModule, Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';

import { ConfigModule } from '../config/config.module';

import { KeynoteController } from './controller/keynote.controller';
import { KeynoteService } from './service/keynote.service';
import { Keynote, KeynoteSchema } from './schema/keynote.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Keynote.name,
        useFactory: () => {
          const schema = KeynoteSchema;
          schema.plugin(require('mongoose-paginate-v2'));
          return schema;
        },
      },
    ]),
    HttpModule,
    ConfigModule
  ],
  controllers: [KeynoteController],
  providers: [KeynoteService]
})
export class KeynoteModule { }
