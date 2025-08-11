export function difference<T>(array: T[], values: T[]): T[] {
  const valueSet = new Set(values);
  return array.filter(item => !valueSet.has(item));
}

export function flatten<T>(array: T[]): T[] {
  const result: T[] = [];
  for (const item of array) {
    if (Array.isArray(item)) {
      result.push(...item);
    } else {
      result.push(item);
    }
  }
  
  return result;
}

export function flattenDeep<T>(array: T[]): T[] {
  const result: T[] = [];

  for (const item of array) {
    if (Array.isArray(item)) {
      result.push(...flattenDeep<T>(item));
    } else {
      result.push(item);
    }
  }

  return result;
}