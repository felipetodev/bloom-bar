const clpFormatter = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0
})

// Accepts what Contentful may send ('16000', '16.000', '16,000', '$16.000', '$ 16,000', 'CLP 16000', 16000)
// and returns a number, or null when the value is not an unambiguous price.
const parsePrice = (raw) => {
  if (typeof raw === 'number') return Number.isFinite(raw) ? raw : null
  if (typeof raw !== 'string') return null

  const value = raw.replace(/clp|\$|\s/gi, '')

  if (/^\d+$/.test(value)) return Number(value)
  // 16.000 / 16,000 / 1.250.000: a separator followed by exactly 3 digits is a thousands separator
  if (/^\d{1,3}([.,]\d{3})+$/.test(value)) return Number(value.replace(/[.,]/g, ''))
  // 16.5 / 16,50: one or two digits after the separator is a decimal part
  if (/^\d+[.,]\d{1,2}$/.test(value)) return Number(value.replace(',', '.'))

  return null
}

// Always formats as Chilean pesos ($16.000); falls back to the raw text when it can't be parsed
const formatPrice = (raw) => {
  const amount = parsePrice(raw)
  return amount === null ? raw : clpFormatter.format(amount)
}

export default formatPrice
