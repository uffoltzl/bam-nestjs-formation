import { NestFactory } from '@nestjs/core';
import { UserModule } from './modules/user/User.module';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  await app.listen(3000);
}
bootstrap();
