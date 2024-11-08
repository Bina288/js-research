function safeToString(value) {
  try {
    return value === null ? 'null' : value === undefined ? 'undefined' : value
  } catch {
    return 'toString() failed'
  }
}
export default safeToString
