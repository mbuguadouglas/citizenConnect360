import {Request} from 'express'


export interface Poll{
    id:string,
    title:string,
    description:string,
    isOpen?:number,
    createdAt?:string,
    isDeleted?:number,
    isApproved?:string,

    userId:string
}

export interface PollPayload{
    id: string,
    userId:string,
    title:string,
    // description:string,
}

export interface ExtendedRequest extends Request{
    info?: PollPayload
}

