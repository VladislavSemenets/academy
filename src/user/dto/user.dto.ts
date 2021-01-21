import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty, IsString,
  IsEmail, IsPhoneNumber, IsIn, IsUUID,
} from 'class-validator';

export class UserDto {

  @ApiPropertyOptional({ example: '6a9c2aac-6805-4af6-8cfd-c7a4570a7128' })
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  public readonly hash: string;

  @ApiPropertyOptional({ example: 'John Doe' })
  @IsNotEmpty()
  @IsString()
  public readonly name: string;

  @ApiPropertyOptional({ example: 'jdoe@email.com' })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  public readonly email: string;

  @ApiPropertyOptional({ example: '+380662332377' })
  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  public readonly phone: string;

  @ApiPropertyOptional({ example: '123456' })
  @IsNotEmpty()
  @IsString()
  public readonly password: string;

  @ApiPropertyOptional({ example: 'm' })
  @IsNotEmpty()
  @IsString()
  @IsIn(['m', 'f'])
  public readonly sex: string;

  @ApiPropertyOptional({ example: 'newbie' })
  @IsNotEmpty()
  @IsString()
  @IsIn(['newbie', 'student', 'teacher'])
  public readonly role: string;
}
