import { Controller } from '@nestjs/common'
import { Crud, CrudController, CrudRequest, ParsedRequest, Override } from '@nestjsx/crud'

import { SocketService } from '../socket/socket.service'

import { Users } from './users.entity'
import { UsersService } from './users.service'

@Crud({
  model: {
    type: Users,
  },
  params: {
    // companyId: {
    //   field: 'companyId',
    //   type: 'number',
    // },
    id: {
      field: 'id',
      type: 'number',
      primary: true,
    },
  },
  query: {
    softDelete: true,
    alwaysPaginate: true,

    // join: {
    //   company: {
    //     exclude: ['description'],
    //   },
    //   'company.projects': {
    //     alias: 'pr',
    //     exclude: ['description'],
    //   },
    //   profile: {
    //     eager: true,
    //     exclude: ['updatedAt'],
    //   },
    // },
  },
})
@Controller('/users')
export class UsersController implements CrudController<Users> {
  constructor(public service: UsersService, public ws: SocketService) {}

  get base(): CrudController<Users> {
    return this
  }

  @Override('getManyBase')
  getAll(@ParsedRequest() req: CrudRequest) {
    this.ws.socket.emit('events', 'helloworld')
    return this.base.getManyBase(req)
  }
}
