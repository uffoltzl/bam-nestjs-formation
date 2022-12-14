import { Module } from '@nestjs/common';
import { UserController } from './controller/User.controller';
import { UserService } from './domain/User.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
