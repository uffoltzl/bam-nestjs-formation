import { ApiProperty } from '@nestjs/swagger';

export class CreatePlayerInputDTO {
  @ApiProperty()
  pseudo!: string;
}
