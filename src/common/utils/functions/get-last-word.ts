export function getLastWord(phrase: string): string {
  return phrase.trim().split(/\s+/).pop() ?? '';
}
