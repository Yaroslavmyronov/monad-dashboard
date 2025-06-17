export function shortHash(hash: string, startLength = 6, endLength = 4): string {
  return `${hash.slice(0, startLength)}...${hash.slice(-endLength)}`;
}
