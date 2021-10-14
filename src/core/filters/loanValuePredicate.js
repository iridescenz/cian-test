export const loanValuePredicate = (offers, value) => {
  const minPaymentValue = offers
  if (value === undefined) {
    return true
  }
    
  
}


// примеры тестов на предикат кредит
// true инпут пустой
// true инпут между максимальным и минимальным значениями оффера
// false инпут меньше минимаольного
// false инпут больше максимального