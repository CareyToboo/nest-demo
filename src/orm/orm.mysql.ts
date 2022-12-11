import { DataSource, DataSourceOptions } from 'typeorm'

import mysqlOrmConfig from './orm.config'

const options = {
  ...mysqlOrmConfig,
  entities: ['../modules/**/*.entity{.ts,.js}'],
  migrationsTableName: 'orm_migrations',
  migrations: ['./_seeds.ts'],
}

const mysqlDataSource = new DataSource(options as DataSourceOptions)

export default mysqlDataSource
