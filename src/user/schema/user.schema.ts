import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly hash: string;
  readonly name: string;
  readonly email: string;
  readonly phone: number;
  readonly password: string;
  readonly sex: string;
  readonly role: string;
}

@Schema()
export class User extends Document {

  @Prop({ required: true })
  public readonly hash: string;

  @Prop({ required: true })
  public readonly name: string;

  @Prop({ required: true })
  public readonly email: string;

  @Prop({ required: true })
  public readonly phone: string;

  @Prop({ required: true })
  public readonly password: string;

  @Prop({ required: true })
  public readonly sex: string;

  @Prop({ required: true })
  public readonly role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
