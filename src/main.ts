import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import './crud.conf'
import { AppModule } from './app.module'
import { RedisIoAdapter } from './modules/socket/redis-io.adapter'

const log = new Logger('app:main')
async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const redisIoAdapter = new RedisIoAdapter(app)
  await redisIoAdapter.connectToRedis()
  app.useWebSocketAdapter(redisIoAdapter)

  await app.listen(6050)

  log.log(`server start at: http://localhost:6050`)
}

bootstrap()
