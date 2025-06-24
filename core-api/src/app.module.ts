import { Module } from '@nestjs/common';
import { DatabasesModule } from './databases';
import { ConfigsModule } from '@configs';

@Module({
  imports: [ConfigsModule, DatabasesModule],
  controllers: [],
})
export class AppModule {}
