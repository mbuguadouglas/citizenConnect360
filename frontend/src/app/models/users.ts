export interface User{
    id:string,
    name:string,
    email:string,
    password:string,
    role?:string,
    avatar?:string,
    isEmailSent?:number, //set property to optional
    isDeleted?:number,  //set property to optional
    awaitApproval?:number
}

// export interface RegisterRequest{
//     name:string,
//     email:string,
//     password:string
// }

export interface registerResponse {
    message:string,
}


export interface loginUser  {
    id:string,
    email:string,
    password:string
}

export interface loginResponse {
    message:string,
    token:string,
    decodedToken: {
        id: string,
        name:string,
        email: string,
        role:string
    }  //change backend to use this. I DID :)
}

export interface PasswordResteResponse{
    email:string
}
