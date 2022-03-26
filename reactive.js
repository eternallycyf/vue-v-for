import { isObject } from './utils.js'
import { proxyHandler } from './handler.js'

export function createReative(state) {
  return createReactiveData(state, proxyHandler)
}

function createReactiveData(data, proxyHandler) {
  if (!isObject(data)) return data;
  return new Proxy(data, proxyHandler)
}