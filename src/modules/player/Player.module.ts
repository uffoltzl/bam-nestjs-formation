import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerRepository } from '@src/modules/player/infra/Player.repository';
import { PlayerDAO } from '@src/modules/player/infra/Player/Player.dao';
import { PlayerController } from './controller/Player.controller';
import { PlayerService } from './domain/Player.service';

@Module({
  imports: [TypeOrmModule.forFeature([PlayerDAO])],
  controllers: [PlayerController],
  providers: [PlayerService, PlayerRepository],
})
export class PlayerModule {}
