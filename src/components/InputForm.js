import React from 'react'
import { Input } from './Input'

export const InputForm = ({onChange, value, onChange1, value1 }) => {

  return (
    <div>
      <Input name='Первоначальный взнос' onChange={onChange} value={value}/>
      <Input name='Размер кредита' onChange={onChange1} value={value1}/>
    </div>
  )
}

