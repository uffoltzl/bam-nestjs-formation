import { PlayerEntity } from '@src/modules/player/domain/Player.entity';

export const PLAYER_REPOSITORY = 'PLAYER_REPOSITORY';

export interface IPlayerRepository {
  findById(id: string): Promise<PlayerEntity | null>;
  save(player: PlayerEntity): Promise<PlayerEntity>;
}
