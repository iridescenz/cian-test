import React from 'react'
import { Input } from './Input'

export const InputForm = ({
  onChangeLoanValue,
  loanValue,
  paymentValue,
  onChangePaymentValue,
}) => {
  return (
    <div>
      <Input
        name='Первоначальный взнос'
        onChange={onChangePaymentValue}
        value={paymentValue}
      />
      <Input
        name='Размер кредита'
        onChange={onChangeLoanValue}
        value={loanValue}
      />
    </div>
  )
}
