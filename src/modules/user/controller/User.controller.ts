import { Controller, Get, Query } from '@nestjs/common';
import { CreateUserInputDTO } from '@src/modules/user/controller/inputTypes/CreateUserInput.dto';
import { UserEntity } from '@src/modules/user/domain/User.entity';
import { UserService } from '@src/modules/user/domain/User.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  create(@Query() { username }: CreateUserInputDTO): UserEntity {
    return this.userService.createUser(username);
  }
}
