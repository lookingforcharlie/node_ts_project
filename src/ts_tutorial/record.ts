function getLanguagesAboveNumber(languages: Record<string, number>): string[] {
  return []
}

// Record<string, number> is a built-in utility type that means: Keys are string, Values are number
// So you can only call this function with objects like:
// {
//   "JavaScript": 95,
//   "Python":     80,
//   "Rust":       58
// }
