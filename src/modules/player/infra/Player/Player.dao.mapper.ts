import { PlayerEntity } from '@src/modules/player/domain/Player.entity';
import { PlayerDAO } from '@src/modules/player/infra/Player/Player.dao';

class PlayerDAOMappers {
  public toInfra(player: PlayerEntity): PlayerDAO {
    return new PlayerDAO({
      ...player,
    });
  }

  public toDomain(player: PlayerDAO): PlayerEntity {
    return new PlayerEntity({
      ...player,
    });
  }
}

export const playerDAOMappers = new PlayerDAOMappers();
