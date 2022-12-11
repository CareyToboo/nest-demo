import { Controller } from '@nestjs/common'
import { Crud, CrudAuth } from '@nestjsx/crud'

import { Users } from './users.entity'
import { UsersService } from './users.service'

@Crud({
  model: {
    type: Users,
  },
  routes: {
    only: ['getOneBase', 'updateOneBase'],
  },
  params: {
    id: {
      primary: true,
      disabled: true,
    },
  },
  //   query: {
  //     join: {
  //       company: {
  //         eager: true,
  //       },
  //       profile: {
  //         eager: true,
  //       },
  //     },
  //   },
})
// @CrudAuth({
//   filter: (user: Users) => ({
//     id: user.id,
//   }),
// })
@Controller('me')
export class MeController {
  constructor(public service: UsersService) {}
}
