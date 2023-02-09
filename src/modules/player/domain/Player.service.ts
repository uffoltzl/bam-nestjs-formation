import { Injectable } from '@nestjs/common';
import { PlayerEntity } from '@src/modules/player/domain/Player.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PlayerService {
  createPlayer(pseudo: string): PlayerEntity {
    return new PlayerEntity({ id: uuidv4(), pseudo });
  }
}
