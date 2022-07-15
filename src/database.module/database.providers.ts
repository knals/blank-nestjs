import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

export const MYSQL_LOCALHOST_DATA_SOURCE = 'MYSQL_LOCALHOST_DATA_SOURCE';
export const MONGO_LOCALHOST_DATA_SOURCE = 'MONGO_LOCALHOST_DATA_SOURCE';

export const databaseProviders = [
  {
    provide: MYSQL_LOCALHOST_DATA_SOURCE,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: configService.get<string>('db.mysql.host'),
        port: configService.get<number>('db.mysql.port'),
        username: configService.get<string>('db.mysql.username'),
        password: configService.get<string>('db.mysql.password'),
        database: configService.get<string>('db.mysql.database'),
        entities: [__dirname + '/../**/mysql/*.entity{.ts,.js}'],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
  {
    provide: MONGO_LOCALHOST_DATA_SOURCE,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'mongodb',
        host: configService.get<string>('db.mongo.host'),
        port: configService.get<number>('db.mongo.port'),
        username: configService.get<string>('db.mongo.username'),
        // password: 'my-secret-pw',
        database: configService.get<string>('db.mongo.database'),
        entities: [__dirname + '/../**/mongo/*.document{.ts,.js}'],
        synchronize: configService.get<boolean>('db.mongo.synchronize'),
        useUnifiedTopology: configService.get<boolean>(
          'db.mongo.useUnifiedTopology',
        ),
      });
      return dataSource.initialize();
    },
  },
];
