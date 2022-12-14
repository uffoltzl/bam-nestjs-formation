import { Module } from '@nestjs/common';
import { UserModule } from '@src/modules/user/User.module';

@Module({
  imports: [UserModule],
})
export class AppModule {}
