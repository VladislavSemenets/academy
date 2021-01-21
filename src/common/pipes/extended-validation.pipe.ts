import {
  ArgumentMetadata,
  Injectable,
  ValidationPipe,
} from '@nestjs/common';

@Injectable()
export class ExtendedValidationPipe extends ValidationPipe {

  public async transform(value, metadata: ArgumentMetadata) {
    return await super.transform(value, metadata);
  }
}
