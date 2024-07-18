import {Request} from 'express'


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

export interface ViewPayload{
    id: string,
    userId:string,
    title:string,
    // description:string,
}

export interface ExtendedRequest extends Request{
    info?: ViewPayload
}

