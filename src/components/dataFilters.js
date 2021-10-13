export const banksPredicate = (offer, value) => {
  return value.length === 0 || value.includes(offer.bankId)
}

export const productPredicate = (offer, value) => {
  if (value === 'ALL') {
    return true
  }
  return offer.product === value
}

export const realtyTypePredicate = (offer, value) => {
  const realtyTypeRequirement = offer.requirements.find(
    (requirement) => requirement.key === 'PROPERTY_TYPE'
  )
  if (realtyTypeRequirement === undefined) {
    return false
  }

  return realtyTypeRequirement.value === value
}

export function insurancePredicate() {

}

export const predicates = {
  banks: banksPredicate,
  realtyType: realtyTypePredicate,
  product: productPredicate,
  insurance: insurancePredicate
}

// filters === {
//   banks: [],
//   realtyType: 'flat',
//   product: 'ALL',
// }

// 1. Взять все ключи из filters (banks, realtyType, product)
// 2. Для каждого ключа взять соотвестсвующий предикат из predicates
// 3. Проверить, что все предикаты для этого оффера с этими фильтрами возвращают true

// примеры тестов на предикат кредит
// true инпут пустой
// true инпут между максимальным и минимальным значениями оффера
// false инпут меньше минимаольного
// false инпут больше максимального


export function filterOffers(offers, filters) {
  return offers.filter((offer) => {
    return Object.keys(filters).every((key) =>
      predicates[key](offer, filters[key])
    )
  })
}
// src
//   mock
//     offers.json
//   ui
//     Filters
//     OfferList
//   pages
//   redux
//   core
//     filters
//       __test__
//         filters.test.js
//         predicates.test.js
//         banksPredicate.test.js
//       filters.js
//       predicates.js
//       banksPredicate.js
