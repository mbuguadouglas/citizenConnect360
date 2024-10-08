export interface Poll{
    id:string,
    title:string,
    description:string,
    choices: Array<string>,
    isOpen?:number,
    createdAt?:string,
    isDeleted?:number,
    isApproved?:string,

    userId:string
}


export interface pollsResponse {
    message:string
}

export interface pollRequest {
    userId:string,
    title:string,
    choices: Array<string>
}