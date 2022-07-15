import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
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

@Module({
  imports: [
    KeycloakConnectModule.register({
      authServerUrl: 'http://localhost:8180/auth',
      realm: 'Master',
      clientId: 'Blank-nestjs',
      secret: 'yC6fxy3yGjODVrhujHsMHmen5UbXha4f',
      // Secret key of the client taken from keycloak server
    }),
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TestModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    // This adds a global level resource guard, which is permissive.
    // Only controllers annotated with @Resource and
    // methods with @Scopes
    // are handled by this guard.
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    // New in 1.1.0
    // This adds a global level role guard, which is permissive.
    // Used by `@Roles` decorator with the
    // optional `@AllowAnyRole` decorator for allowing any
    // specified role passed.
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}
