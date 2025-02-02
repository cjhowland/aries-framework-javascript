import type { ActionMenuFormOptions } from './ActionMenuOptionForm'

import { Type } from 'class-transformer'
import { IsBoolean, IsInstance, IsOptional, IsString } from 'class-validator'

import { ActionMenuForm } from './ActionMenuOptionForm'

export interface ActionMenuOptionOptions {
  name: string
  title: string
  description: string
  disabled?: boolean
  form?: ActionMenuFormOptions
}

export class ActionMenuOption {
  public constructor(options: ActionMenuOptionOptions) {
    if (options) {
      this.name = options.name
      this.title = options.title
      this.description = options.description
      this.disabled = options.disabled
      if (options.form) {
        this.form = new ActionMenuForm(options.form)
      }
    }
  }

  @IsString()
  public name!: string

  @IsString()
  public title!: string

  @IsString()
  public description!: string

  @IsBoolean()
  @IsOptional()
  public disabled?: boolean

  @IsInstance(ActionMenuForm)
  @Type(() => ActionMenuForm)
  @IsOptional()
  public form?: ActionMenuForm
}
