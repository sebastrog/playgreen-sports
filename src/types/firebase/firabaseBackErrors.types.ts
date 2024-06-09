export interface FirebaseErrorDetails {
  message: string;
  domain: string;
  reason: string;
}

export interface FirebaseError {
  code: number;
  message: string;
  errors: FirebaseErrorDetails[];
}
