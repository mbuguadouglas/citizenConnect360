
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

export interface PollVotes{
    id:string,
    userId:string,
    pollId:string,
    answer:string,
    isOpen?:number,
    createdAt?:string,
    isDeleted?:number
}

// use an array instead
// interface PossibleChoices{
//     choice1:string,
//     choice2:string,
//     choice3:string,
//     choice4?:string,
//     choice5?:string
// }



