import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigsService } from '@configs';

@Global()
@Module({
  imports: [
    SequelizeModule.forRootAsync({
      inject: [ConfigsService],
      useFactory: (config: ConfigsService) => {
        return {
          ...config.mysql,
          synchronize: true,
        };
      },
    }),
  ],
})
export class DatabasesModule {}
