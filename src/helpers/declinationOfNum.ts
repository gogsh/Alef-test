
/** Возвращает правильное склонение года
 * @param n входное число
*/
export default function declinationOfYears(n: number) {
  const declinations = ['год', 'года', 'лет']
  n = Math.abs(n) % 100
  const n1 = n % 10
  if (n > 10 && n < 20) return declinations[2]
  if (n1 > 1 && n1 < 5) return declinations[1]
  if (n1 == 1) return declinations[0]
  return declinations[2]
}
