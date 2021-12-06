export class AuthResponse {
    success: boolean = false;
    message: string = "";
    data: AuthData = new AuthData();

     
}

export class AuthData{
    token : string = "";
}