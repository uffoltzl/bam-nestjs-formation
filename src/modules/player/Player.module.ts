import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PLAYER_REPOSITORY } from '@src/modules/player/domain/repositories/Player.repository.interface';
import { PlayerRepository } from '@src/modules/player/infra/Player.repository';
import { PlayerDAO } from '@src/modules/player/infra/Player/Player.dao';
import { PlayerController } from './controller/Player.controller';
import { PlayerService } from './domain/Player.service';

@Module({
  imports: [TypeOrmModule.forFeature([PlayerDAO])],
  controllers: [PlayerController],
  providers: [
    PlayerService,
    { provide: PLAYER_REPOSITORY, useClass: PlayerRepository },
  ],
})
export class PlayerModule {}
