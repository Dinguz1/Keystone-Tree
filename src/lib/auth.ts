/**
 * Returns an index depending on the matching ID-
 * If there are no matching IDs, returns -1
 * @param id 
 * @returns number
 */
export const getAuthLevel = (id: string | null): number => {
  switch (id) {
    case '1235':
      return 1
    case '1235GM':
      return 2
    default:
      return -1
  }
}