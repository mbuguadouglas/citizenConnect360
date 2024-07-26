

export interface Votes{
    id:string,
    userId:string,
    pollId:string,
    choiceMade:string,
    isDeleted?:number
}

export interface votesResponse {
    message:string
}

export interface votesRequest {
    userId:string,
    pollId:string,
    choiceMade:string
}