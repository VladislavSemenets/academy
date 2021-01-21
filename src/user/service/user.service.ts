import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IUser, User } from '../schema/user.schema';
import { UserCreateDto } from '../dto/user-create.dto';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name) private readonly _userModel: Model<IUser>,
  ) { }

  public async create(userCreateDto: UserCreateDto): Promise<{ hash: string }> {
    const user = new this._userModel({ ...userCreateDto, hash: uuidv4() });
    const { hash } = await user.save();

    return { hash }
  }
}
