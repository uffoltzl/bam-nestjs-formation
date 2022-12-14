import { ApiProperty } from '@nestjs/swagger';

export class CreateUserInputDTO {
  @ApiProperty()
  username!: string;
}
