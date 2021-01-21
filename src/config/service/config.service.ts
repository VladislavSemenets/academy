import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigService {

  constructor(filePath: string) {
    this._envConfig = dotenv.parse(
      fs.readFileSync(filePath)
    );
  }

  private readonly _envConfig: { [key: string]: string };

  public get(key: string): string {
    return this._envConfig[key];
  }
}
