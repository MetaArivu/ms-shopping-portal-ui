export class AuthResponse {
    success: boolean;
    message: string;
    tokenId: string;

    constructor(success: boolean, message: string, tokenid: string){
        this.success = success;
        this.message = message;
        this.tokenId = tokenid;
    }
}