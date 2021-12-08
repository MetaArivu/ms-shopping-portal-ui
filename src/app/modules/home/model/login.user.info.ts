export class LoginUserInfoResponse {
    success: boolean = false;
    messagee : string = "";
    data : LoginUserInfo = new LoginUserInfo();
}

export class LoginUserInfo {
    id : string = "";
    loginId : string = "";
    firstName : string = "";
    lastName : string = "";
    miiddleName : string = "";
    email : string = "";
    age : number = 0;
    dob : Date = new Date();

    get name() : string{
        return this.firstName + " "+this.lastName;
    }
}

