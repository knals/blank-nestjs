import { Injectable } from '@nestjs/common';
import { Roles } from 'nest-keycloak-connect';

@Injectable()
export class AppService {

  @Roles({ roles: ['user'] })
  getHello(): string {
    return 'Hello World!';
  }
}
