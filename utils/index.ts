import format from 'date-fns/format'
const DATE_FORMAT = 'yyyy-MM-dd'

export const formatDate = (
  date: string,
  template: string = DATE_FORMAT,
  falsy = ''
) => {
  if (!date) return falsy
  return format(new Date(date), template)
}

export const formatCurrency = (value: number) => {
  if (!value) return `0`

  return Math.round(value)
    .toString()
    .replace(/(\d)(?=(\d{3})+$)/g, '$1,')
}

export const getTerm = (term: number, halfTerm: number) => {
  const { halfFirst, halfSecond } = HALF_TERM_CONFIG
  return {
    term,
    halfTermText:
      halfTerm === halfFirst.value ? halfFirst.text : halfSecond.text,
  }
}
