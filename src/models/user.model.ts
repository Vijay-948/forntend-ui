export interface UserDetails{
    firstName: string | undefined;
    lastName: string | undefined;
    email: string | undefined;
    password: string | undefined;
    isActive?: boolean;
}

export interface userLoginDetails {
    email: string | undefined;
    password: string | undefined;
}