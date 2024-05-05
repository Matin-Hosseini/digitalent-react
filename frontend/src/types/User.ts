export type UserRoles = "USER" | "ADMIN" | "AUTHOR" | "TEACHER";

export type User =
  | {
      id?: string;
      username?: string;
      email?: string;
      cover?: string | null;
      name?: string;
      phone?: string;
      role?: UserRoles;
      createdAt?: string;
      updatedAt?: string;
    }
  | null
  | undefined;
