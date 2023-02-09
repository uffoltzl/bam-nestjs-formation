import { ApiProperty } from '@nestjs/swagger';

export class PlayerOutputDTO {
  @ApiProperty()
  id!: string;

  @ApiProperty()
  pseudo!: string;
}
