import { Get, Injectable } from '@nestjs/common';
import { Resource, Roles } from 'nest-keycloak-connect';

@Resource(AppService.name)
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
