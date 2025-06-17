export function convertToDays(period: string) {
  if (period === 'all') return 0;

  const match = period.match(/(\d+)([a-z]+)/);
  if (!match) return null;

  const number = parseInt(match[1]);
  const unit = match[2];

  switch (unit) {
    case 'd':
      return number;
    case 'w':
      return number * 7;
    case 'm':
      return number * 30;
    case 'y':
      return number * 365;
    default:
      return null;
  }
}
