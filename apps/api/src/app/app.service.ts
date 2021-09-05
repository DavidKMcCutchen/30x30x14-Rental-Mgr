import { Injectable } from '@nestjs/common';
import { Message } from '@rental-mgr/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
