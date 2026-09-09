import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database/database.service';

@Injectable()
export class AppService {
  constructor(private readonly db: DatabaseService) {}
  getHello(): string {
    // const users = this.db.
    return 'Hello World!';
  }
}
