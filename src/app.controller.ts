import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get('healthz')
  public getProjectName(): string {
    return 'Academy App';
  }

}
