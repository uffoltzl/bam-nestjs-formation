import { Inject, Injectable } from '@nestjs/common';
import { PlayerEntity } from '@src/modules/player/domain/Player.entity';
import {
  IPlayerRepository,
  PLAYER_REPOSITORY,
} from '@src/modules/player/domain/repositories/Player.repository.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PlayerService {
  constructor(
    @Inject(PLAYER_REPOSITORY)
    private readonly playerRepository: IPlayerRepository,
  ) {}

  async createPlayer(pseudo: string): Promise<PlayerEntity> {
    return this.playerRepository.save(
      new PlayerEntity({ id: uuidv4(), pseudo }),
    );
  }

  async getPlayer(id: string): Promise<PlayerEntity | null> {
    return this.playerRepository.findById(id);
  }
}
