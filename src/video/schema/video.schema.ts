import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface IVideo extends Document {
  readonly hash: string;
  readonly title: string;
  readonly order: number;
  readonly uri: string;
}

@Schema()
export class Video extends Document {

  @Prop({ required: true })
  public readonly hash: string;

  @Prop({ required: true })
  public readonly title: string;

  @Prop({ required: true })
  public readonly order: number;

  @Prop({ required: true })
  public readonly uri: string;
}

export const VideoSchema = SchemaFactory.createForClass(Video);
