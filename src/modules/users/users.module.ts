import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { UserProfile } from '../users-profiles/user-profile.entity'
import { MeController } from './me.controller'
import { UsersController } from './users.controller'
import { Users } from './users.entity'
import { UsersService } from './users.service'

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController, MeController],
})
export class UsersModule {}
