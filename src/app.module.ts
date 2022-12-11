import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import modules from './modules'
import ormConfig from './orm/orm.config'

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), ...modules],
})
export class AppModule {}
