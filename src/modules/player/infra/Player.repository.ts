import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPlayerRepository } from '@src/modules/player/domain/repositories/Player.repository.interface';
import { PlayerEntity } from '@src/modules/player/domain/Player.entity';
import { PlayerDAO } from '@src/modules/player/infra/Player/Player.dao';
import { playerDAOMappers } from '@src/modules/player/infra/Player/Player.dao.mapper';
import { Repository } from 'typeorm';

@Injectable()
export class PlayerRepository implements IPlayerRepository {
  constructor(
    @InjectRepository(PlayerDAO)
    private readonly playerRepository: Repository<PlayerDAO>,
  ) {}

  async findById(id: string): Promise<PlayerEntity> {
    const player = await this.playerRepository.findOneBy({ id });

    if (!player) {
      return null;
    }

    return playerDAOMappers.toDomain(player);
  }

  async save(player: PlayerEntity): Promise<PlayerEntity> {
    const playerDAO = await this.playerRepository.save(
      playerDAOMappers.toInfra(player),
    );
    return playerDAOMappers.toDomain(playerDAO);
  }
}
