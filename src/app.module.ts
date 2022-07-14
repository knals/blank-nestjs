import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/utils/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TestModule } from './test.module/test.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true 
    }),    
    TestModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
