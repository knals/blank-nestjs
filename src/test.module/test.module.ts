import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database.module/database.module';
import { databaseProviders } from 'src/database.module/database.providers';
import { testProviders } from './test.providers';
import { TestService } from './test.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...testProviders,
    TestService,
    ...databaseProviders
  ],
})
export class TestModule {}