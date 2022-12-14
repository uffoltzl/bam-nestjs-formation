import { Controller, Get, Query } from '@nestjs/common';
import { UserEntity } from '@src/modules/user/domain/User.entity';
import { UserService } from '@src/modules/user/domain/User.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  create(@Query() username: string): UserEntity {
    return this.userService.createUser(username);
  }
}
