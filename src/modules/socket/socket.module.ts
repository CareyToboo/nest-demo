import { Module, Global } from '@nestjs/common'

import { SocketGateway } from './socket.gateway'
import { SocketService } from './socket.service'

@Global()
@Module({
  controllers: [],
  imports: [],
  providers: [SocketGateway, SocketService],
  exports: [SocketService],
})
export class SocketModule {}
