import { HttpModule, Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';

import { ConfigModule } from '../config/config.module';

import { User, UserSchema } from './schema/user.schema';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          const schema = UserSchema;
          schema.plugin(require('mongoose-paginate-v2'));
          return schema;
        },
      },
    ]),
    HttpModule,
    ConfigModule
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }
