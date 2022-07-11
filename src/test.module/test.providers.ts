import { MYSQL_LOCALHOST_DATA_SOURCE } from 'src/database.module/database.providers';
import { DataSource } from 'typeorm';
import { Test } from './test.entity';

export const testProviders = [
  {
    provide: 'MYSQL_LOCALHOST_DATA_SOURCE',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Test),
    inject: ['DATA_SOURCE'],
  },
];