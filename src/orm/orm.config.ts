import { join } from 'path'

import { TypeOrmModuleOptions } from '@nestjs/typeorm'

const mysqlOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'localMysql01',
  password: 'localMysql01',
  database: 'local_mysql_01',
  synchronize: false,
  entities: [join(__dirname, '../modules/**/*.entity{.ts,.js}')],
}

export default mysqlOrmConfig
