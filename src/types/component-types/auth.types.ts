type authInputType = {
  userEmail: string;
  password: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  termsAndConditions?: boolean;
};

type errorType = {
  userEmail?: string;
  password?: string;
  confirmPassword?: string;
  termsAndConditions?: string;
  firstName?: string;
  lastName?: string;
};

export type { authInputType, errorType };
