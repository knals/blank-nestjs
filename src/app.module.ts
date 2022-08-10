import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import {
  AuthGuard,
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
} from 'nest-keycloak-connect';
import configuration from 'src/utils/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test.module/test.module';
import { KeycloakConfigService } from './keycloak.module/keycloak.config.service';
import { KeycloakModule } from './keycloak.module/keycloak.module';
import { MailModule } from './mail.module/mail.module';
import { ErrorsInterceptor } from './interceptors/errors.interceptor';

@Module({
  imports: [
    KeycloakConnectModule.registerAsync({
      useExisting: KeycloakConfigService,
      imports: [KeycloakModule],
    }),
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TestModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor,
    },
  ],
})
export class AppModule {}
