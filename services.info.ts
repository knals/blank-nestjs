{
  oracle: {
    database: 'XE';
    username: 'SYSTEM';
    password: 'oracle';
    port: 1521;
  }
  mysql: {
    username: 'root';
    password: 'example';
    database: 'test';
    port: 3306;
  }
  adminer: {
    username: 'root';
    password: 'example';
    url: 'http://localhost:8080/auth/';
  }
  mongo: {
    username: 'root';
    password: 'example';
    port: 27017;
  }
  mongo_express: {
    username: 'root';
    password: 'example';
    url: 'http://localhost:8081/db/admin/';
  }
  rabbitmq: {
    username: 'guest';
    password: 'guest';
    url: 'http://localhost:15672/#/';
  }
  portainer: {
    username: 'admin';
    password: 'admin1234567';
    url: 'http://localhost:9000/';
  }
  keycloak: {
    username: 'admin';
    password: 'Pa55w0rd';
    url: 'http://localhost:9000/';
  }
}
