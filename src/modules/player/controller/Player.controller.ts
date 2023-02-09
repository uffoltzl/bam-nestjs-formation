import { Controller, Get, Query } from '@nestjs/common';
import { CreatePlayerInputDTO } from '@src/modules/player/controller/inputTypes/CreatePlayerInput.dto';
import { PlayerEntity } from '@src/modules/player/domain/Player.entity';
import { PlayerService } from '@src/modules/player/domain/Player.service';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  create(@Query() { pseudo }: CreatePlayerInputDTO): Promise<PlayerEntity> {
    return this.playerService.createPlayer(pseudo);
  }
}
