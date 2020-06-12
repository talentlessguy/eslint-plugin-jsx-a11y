/**
 * @flow
 */
import { dom } from 'aria-query'

const domElements = [...dom.keys()]

/**
 * Returns boolean indicating whether the given element is a DOM element.
 */
const isDOMElement = (tagName: string): boolean => domElements.includes(tagName)

export default isDOMElement
