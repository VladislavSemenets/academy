import { Module } from '@nestjs/common';

import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { VideoModule } from './video/video.module';
import { KeynoteModule } from './keynote/keynote.module';

import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule,
    VideoModule,
    DatabaseModule,
    KeynoteModule
  ],
  controllers: [AppController],
  exports:[ConfigModule]
})
export class AppModule { }
