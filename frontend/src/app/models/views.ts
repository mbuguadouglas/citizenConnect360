

export interface View{
    id:string,
    userId:string,
    title:string,
    description:string,
    body:string,
    location:string,
    imageUrl?:string,
    createdAt?:string,
    isDeleted?:number,
    isApproved?:string,
    isModified?:number
}


export interface viewsResponse {
    message:string
}

export interface viewRequest {
    userId:string,
    title:string,
    description:string,
    body:string,
    location:string,
    imageUrl:string,
}