import {
  Controller, Req, Post,
  Body, Request,
  HttpCode, HttpStatus
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UserService } from '../service/user.service';
import { UserCreateDto } from '../dto/user-create.dto';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly _userService: UserService) { }

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  public async create(
    @Body() userCreateDto: UserCreateDto,
    @Req() request: Request,
  ): Promise<{ hash: string }> {
    return await this._userService.create(userCreateDto);
  }

}
