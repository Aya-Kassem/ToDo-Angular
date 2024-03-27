export interface SignUpResponseData {
    kind: string,
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string
}

export interface signInResponseData {
    kind: string,
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string
    localId: string,
    displayName: string,
    registered: boolean,
}

export interface User {
    email: string,
    password: string
}

export interface currentUser {
    email: string, 
    localId: string, 
    idToken: string, 
    expirationDate: number;
    activeUser: boolean
}