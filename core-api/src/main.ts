import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigsService } from '@configs';

(async () => {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigsService);
  const { port } = config.server;

  await app.listen(port, () => console.log(`server is running on ${port}`));
})();
