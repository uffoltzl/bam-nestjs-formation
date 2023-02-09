import { UserEntity } from '@src/modules/user/domain/User.entity';
import { UserDAO } from '@src/modules/user/infra/User/User.dao';

class UserDAOMappers {
  public toInfra(user: UserEntity): UserDAO {
    return new UserDAO({
      ...user,
    });
  }

  public toDomain(user: UserDAO): UserEntity {
    return new UserEntity({
      ...user,
    });
  }
}

export const userDAOMappers = new UserDAOMappers();
