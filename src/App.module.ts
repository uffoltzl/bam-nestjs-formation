import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerModule } from '@src/modules/player/Player.module';
import { dataSourceOptions } from 'config/database';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), PlayerModule],
})
export class AppModule {}
