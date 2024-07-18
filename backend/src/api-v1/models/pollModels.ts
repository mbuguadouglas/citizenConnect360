
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



