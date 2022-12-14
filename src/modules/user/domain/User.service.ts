import { Injectable } from '@nestjs/common';
import { UserEntity } from '@src/modules/user/domain/User.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  createUser(username: string): UserEntity {
    return new UserEntity({ id: uuidv4(), username });
  }
}
