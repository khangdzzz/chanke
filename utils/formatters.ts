import linkifyHtml from 'linkify-html'
import { HalfTerm } from '@/types'

export const enableLinkifyHTML = (
  content = '',
  className = 'link',
  defaultValue = ''
) => linkifyHtml(content.trim(), { className }) || defaultValue

export const escapeTextContent = (content: string) => {
  const allowedTags = ['b', 'i', 'u', 'a']
  const regex = new RegExp('</?(?!' + allowedTags.join('|') + ')[^>]*>', 'gi')
  return content
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/\\/g, '&#92;')
    .replace(regex, '')
    .replace(/\n/g, '<br>')
}

export const displayTextContentForView = (content: string) => {
  if (!content) return
  const revertTextContent = escapeTextContent(content)
  return enableLinkifyHTML(revertTextContent)
}

/**
 * @param {number} term a number representation term field get from database
 * @param {number} halfTerm a number representation halfTerm field get from database
 * @returns {string}
 * @example
 *  term = 14
 *  halfTerm = 1
 *  return 14期 期上
 */
export const getFiscalTermLabel = (term?: number, halfTerm?: number) => {
  const FIRST_TERM_TEXT = '上期'
  const SECOND_TERM_TEXT = '下期'
  const halfTermContent =
    halfTerm === HalfTerm.First ? FIRST_TERM_TEXT : SECOND_TERM_TEXT

  return `${term}期 ${halfTermContent}`
}

/**
 * Format object: remove all falsy value attributes of input object
 * @param {object} object
 * @returns {object}
 * @example
 *  object = { 'a': 1, 'b': null, 'c': 3, 'd': false, 'e': undefined }
 *  return {a: 1, c: 3}
 */
export const removeFalsyValueOfObject = (object: object) => {
  const obj = {}
  for (const key in object) {
    if (object[key]) {
      obj[key] = object[key]
    }
  }
  return obj
}

export enum Affix {
  Prefix = 'prefix',
  Suffix = 'suffix',
}

/**
 * Format currency with (optional) prefix/suffix unit
 * @param {number | null | undefined} currency if (!currency) return '-'
 * @param {string} unit default is '¥'
 * @param {Affix} affix of the unit, Affix.Prefix or Affix.Suffix. Default is Prefix
 * @param {string} defaultValue
 * @returns {string}
 * @example
 *  formatCurrencyWithUnit(100000, '$')
 *  return: '$100,000'
 */
export const formatCurrencyWithUnit = (
  currency: number | null | undefined,
  unit = '¥',
  affix: Affix = Affix.Prefix,
  defaultValue = '-'
) => {
  if (currency === null || currency === undefined) return defaultValue

  const currencyFormatted = currency
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  return affix === Affix.Prefix
    ? unit + currencyFormatted
    : currencyFormatted + unit
}

export const commaNumberFormat = (number?: number) => {
  if (!number || isNaN(number)) return ''

  return number
    ?.toString()
    .replace(/,/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const revertCommaNumberFormat = (value: string) => {
  const number = Number(value.replace(/,/g, ''))

  return isNaN(number) ? value : number
}
