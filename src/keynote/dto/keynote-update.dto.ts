import { PartialType } from '@nestjs/mapped-types';
import { KeynoteCreateDto } from './keynote-create.dto';

export class KeynoteUpdateDto extends PartialType(KeynoteCreateDto) { }
