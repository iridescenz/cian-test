import { banksPredicate } from './banksPredicate'
import { realtyTypePredicate } from './realtyTypePredicate'
import { productPredicate } from './productPredicate'
import { insurancePredicate } from './insurancePredicate'

export const predicates = {
  banks: banksPredicate,
  realtyType: realtyTypePredicate,
  product: productPredicate,
  insurance: insurancePredicate,
}
