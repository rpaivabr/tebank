import { Controller, Get, Post } from '@nestjs/common';
import { LoginResponse, Message } from '@tebank/api-interfaces';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Post('login')
  login(): LoginResponse {
    return this.appService.login();
  }
}
