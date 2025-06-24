import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SequelizeOptions } from 'sequelize-typescript';

@Injectable()
export class ConfigsService {
  constructor(private readonly config: ConfigService) {}

  get mysql() {
    const config: SequelizeOptions = {
      dialect: 'mysql',
      host: this.config.get<string>('MYSQL_HOST'),
      username: this.config.get<string>('MYSQL_USERNAME'),
      password: this.config.get<string>('MYSQL_PASSWORD'),
      database: this.config.get<string>('MYSQL_DATABASE'),
      port: 3306,
    };

    this.checkUndefined(config, 'mysql');
    return config;
  }

  get server() {
    const config = {
      port: this.config.get<string>('SERVER_PORT') || 3000,
    };

    this.checkUndefined(config, 'server');
    return config;
  }

  private checkUndefined(config: Record<string, any>, name: string) {
    Object.entries(config).forEach(([key, value]) => {
      if (value === undefined) {
        throw new Error(`The ${name}'s ${key} is undefined. check plz.`);
      }
    });
  }
}
