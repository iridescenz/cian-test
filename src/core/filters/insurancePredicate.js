export const insurancePredicate = (offer, value) => {
  const insuranceRequirement = offer.requirements.find(
    (requirement) => requirement.key === 'INSURANCE'
  )
  if (insuranceRequirement === undefined) {
    return !value
  }

  return insuranceRequirement.value === value
}