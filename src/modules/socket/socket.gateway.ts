import { Server, Socket } from 'socket.io'

import { Logger } from '@nestjs/common'
import {
  WebSocketGateway,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets'

import { SocketService } from './socket.service'

@WebSocketGateway(6055, {
  cors: {
    origin: '*',
  },
})
export class SocketGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor(private socketService: SocketService) {}
  @WebSocketServer() public server: Server
  private logger: Logger = new Logger('SocketGateway')

  afterInit(server: Server) {
    this.socketService.socket = server
    this.logger.log(`SocketGateway Initialized`)
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`socket connected: ${client.id} args:${JSON.stringify(args)}`)
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`socket disconnected: ${client.id}`)
  }

  @SubscribeMessage('events')
  handleEvents(@MessageBody() data: any) {
    console.log('===events', data)

    if (data.ok) {
      return {
        event: 'events',
        data: {
          ok: true,
        },
      }
    }
  }
}
