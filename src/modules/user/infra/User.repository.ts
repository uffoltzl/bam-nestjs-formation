import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUserRepository } from '@src/modules/user/domain/repositories/User.repository.interface';
import { UserEntity } from '@src/modules/user/domain/User.entity';
import { UserDAO } from '@src/modules/user/infra/User/User.dao';
import { userDAOMappers } from '@src/modules/user/infra/User/User.dao.mapper';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserDAO)
    private readonly userRepository: Repository<UserDAO>,
  ) {}

  async findById(id: string) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      return null;
    }

    return userDAOMappers.toDomain(user);
  }

  async save(user: UserEntity) {
    await this.userRepository.save(userDAOMappers.toInfra(user));
  }
}
