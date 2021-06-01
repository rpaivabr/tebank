import { Injectable } from '@nestjs/common';
import { LoginResponse, Message } from '@tebank/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  login(): LoginResponse {
    return { token: 'abcd1234' };
  }
}
