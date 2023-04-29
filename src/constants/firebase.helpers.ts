export interface FirebaseSigninError {
  code: 'auth/invalid-email' | 'auth/user-disabled' | 'auth/user-not-found' | 'auth/wrong-password';
}

export interface FirebaseSignupError {
  code: 'auth/email-already-in-use' | 'auth/invalid-email' | 'auth/operation-not-allowed' | 'auth/weak-password';
}

export const isFirebaseSigninError = (error: any): error is FirebaseSigninError => {
  return (
    error.code === 'auth/invalid-email' ||
    error.code === 'auth/user-disabled' ||
    error.code === 'auth/user-not-found' ||
    error.code === 'auth/wrong-password'
  );
};

export const isFirebaseSignupError = (error: any): error is FirebaseSignupError => {
  return (
    error.code === 'auth/email-already-in-use' ||
    error.code === 'auth/invalid-email' ||
    error.code === 'auth/operation-not-allowed' ||
    error.code === 'auth/weak-password'
  );
};
