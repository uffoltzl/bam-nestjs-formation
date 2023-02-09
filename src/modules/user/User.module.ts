import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDAO } from '@src/modules/user/infra/User/User.dao';
import { UserController } from './controller/User.controller';
import { UserService } from './domain/User.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserDAO])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
