
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestCollection } from 'src/test.module/test.document';
import { Test } from 'src/test.module/test.entity';
import { DataSource } from 'typeorm';

export const MYSQL_LOCALHOST_DATA_SOURCE = 'MYSQL_LOCALHOST_DATA_SOURCE';
export const MONGO_LOCALHOST_DATA_SOURCE = 'MONGO_LOCALHOST_DATA_SOURCE';

export const databaseProviders = [
  {
    provide: MYSQL_LOCALHOST_DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'my-secret-pw',
        database: 'test',
        entities: [
          // __dirname + '/../**/*.entity{.ts,.js}',
          Test
        ], 
        synchronize: true
      });
      return dataSource.initialize();
    }
  },
  {
    provide: MONGO_LOCALHOST_DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mongodb',
        host: 'localhost',
        port: 27017,
        username: 'root',
        // password: 'my-secret-pw',
        database: 'test',
        entities: [
          // __dirname + '/../**/*.document{.ts,.js}',
          TestCollection
        ], 
        synchronize: true,
        useUnifiedTopology: true
      });
      return dataSource.initialize();
    }
  }
];

