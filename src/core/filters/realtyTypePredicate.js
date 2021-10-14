export const realtyTypePredicate = (offer, value) => {
  const realtyTypeRequirement = offer.requirements.find(
    (requirement) => requirement.key === 'PROPERTY_TYPE'
  )
  if (realtyTypeRequirement === undefined) {
    return false
  }

  return realtyTypeRequirement.value === value
}
