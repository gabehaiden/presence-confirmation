export class SupabaseException extends Error {
  constructor(message: string) {
    super(message)
  }
}