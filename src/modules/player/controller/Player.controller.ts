import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBody,
  ApiInternalServerErrorResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreatePlayerInputDTO } from '@src/modules/player/controller/inputTypes/CreatePlayerInput.dto';
import { GetPlayerInputDTO } from '@src/modules/player/controller/inputTypes/GetPlayerInput.dto';
import { PlayerOutputDTO } from '@src/modules/player/controller/outputTypes/PlayerOutput.dto';
import { PlayerService } from '@src/modules/player/domain/Player.service';

@ApiTags('player')
@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post('create')
  @ApiResponse({
    status: 201,
    description: 'Your player has been successfully saved.',
    type: PlayerOutputDTO,
  })
  @ApiInternalServerErrorResponse({
    description: 'There is an internal server error.',
  })
  @ApiBody({ type: CreatePlayerInputDTO })
  create(@Body() { pseudo }: CreatePlayerInputDTO): Promise<PlayerOutputDTO> {
    return this.playerService.createPlayer(pseudo);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Your player has been successfully retrieved.',
    type: PlayerOutputDTO,
  })
  @ApiInternalServerErrorResponse({
    description: 'There is an internal server error.',
  })
  async get(@Query() { id }: GetPlayerInputDTO): Promise<PlayerOutputDTO> {
    const player =
      id === undefined ? null : await this.playerService.getPlayer(id);
    if (player === null) {
      throw new HttpException(
        { status: HttpStatus.BAD_REQUEST, message: 'Player does not exist' },
        HttpStatus.BAD_REQUEST,
      );
    }
    return player;
  }
}
