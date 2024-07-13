type Func = (...args: any[]) => any
type Direction = 'asc' | 'desc'

const debounce = (func: Func, wait: number): Func => {
  let timeout: NodeJS.Timeout
  return function (this: any, ...args: any[]) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

const deepClone = <Type>(obj: Object): Type => {
  return JSON.parse(JSON.stringify(obj))
}

const sortByField = <Type>(field: keyof Type, direction: Direction = 'desc') => (a: Type, b: Type): number => {
  if (a[field] < b[field]) {
    return direction === 'desc' ? 1 : -1
  }
  if (a[field] > b[field]) {
    return direction === 'desc' ? -1 : 1
  }
  return 0
}

const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const throttle = (func: Func, limit: number): Func => {
  let inThrottle: boolean
  return function (this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

const uniqueArray = <Type>(arr: Type[]): Type[] => {
  return [...new Set(arr)]
}

export { debounce, deepClone, sortByField, sleep, throttle, uniqueArray }
