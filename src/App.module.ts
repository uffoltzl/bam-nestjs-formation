import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '@src/modules/user/User.module';
import { dataSourceOptions } from 'config/database';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UserModule],
})
export class AppModule {}
