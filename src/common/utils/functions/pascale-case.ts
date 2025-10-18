export function pascaleCase(input: string): string {
  const word = input.toLowerCase();
  return word[0].toUpperCase() + word.substring(1, word.length);
}
