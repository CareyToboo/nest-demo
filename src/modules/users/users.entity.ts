import { IsOptional, IsNotEmpty, IsBoolean, IsString, IsEmail, MaxLength } from 'class-validator'
import { BaseEntity } from 'src/lib/base-entity'
import { Entity, Column } from 'typeorm'

import { CrudValidationGroups } from '@nestjsx/crud'

const { CREATE, UPDATE } = CrudValidationGroups

@Entity('users')
export class Users extends BaseEntity {
  @IsOptional({ always: true })
  @IsBoolean({ always: true })
  @Column({ type: 'boolean', default: true })
  isActive: boolean

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @Column({ nullable: true })
  name: string

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @MaxLength(255, { always: true })
  @IsEmail({ require_tld: false }, { always: true })
  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  email: string
}
