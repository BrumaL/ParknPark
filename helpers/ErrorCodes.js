const EMAIL_ALREADY_IN_USE = 'auth/email-already-in-use';
const INVALID_EMAIL = 'auth/invalid-email';
const OPERATION_NOT_ALLOWED = 'auth/operation-not-allowed';
const WEAK_PASSWORD = 'auth/weak-password';
const USER_DISABLED = 'auth/user-disabled';
const USER_NOT_FOUND = 'auth/user-not-found';
const WRONG_PASSWORD = 'auth/wrong-password';

export function TranslateGoogleAccountErrors(errorCode) {
  switch (errorCode) {
    case EMAIL_ALREADY_IN_USE:
      return 'E-mailadressen används redan.';
    case INVALID_EMAIL:
      return 'E-emailadressen har fel format.';
    case OPERATION_NOT_ALLOWED:
      return 'Registrering tillfälligt avstängd.';
    case WEAK_PASSWORD:
      return 'Lösenordet är för svagt. Använd minst 6 tecken.';
    case USER_DISABLED:
      return 'Användaren är inaktiverad.'
    case USER_NOT_FOUND:
      return 'Användaren finns inte.'
    case WRONG_PASSWORD:
      return 'Fel lösenord. Vänligen försök igen.'
    default:
      return 'Något gick fel med registreringen. Vänligen försök igen.';
  }
}