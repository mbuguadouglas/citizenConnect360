import {Request} from 'express'


export interface Incident{
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

export interface IncidentPayload{
    id: string,
    userId:string,
    title:string,
    // createdAt:string,
}

export interface ExtendedRequest extends Request{
    info?: IncidentPayload
}

