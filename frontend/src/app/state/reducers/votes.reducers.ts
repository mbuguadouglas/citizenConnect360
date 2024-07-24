import { createReducer, on } from "@ngrx/store"
import { Votes } from "../../models/votes"
import { VoteActions } from "../actions/votes.actions"


// define the interface for getting an incident
export interface VoteInterface {
    // get an vote
    id:string,

    // get user votes
    userId:string,

    // getAllVotes
    votes:Array<Votes>
    voteError:string,
    voteLoading:boolean,


    // addVote
    addVoteSuccessMsg : string,
    addVoteErrorMsg : string,
    addVoteLoading : boolean
}

//initialize the initial state of the slice
const initialState:VoteInterface = {
    // get an vote
    id:'',

    // get user votes
    userId:'',

    // getAllvotes
    votes:[],
    voteError:'',
    voteLoading:false,


    // addVote
    addVoteSuccessMsg : '',
    addVoteErrorMsg : '',
    addVoteLoading : false,

}

export const voteReducer = createReducer(
    initialState,
    // handle the adding incident actions
    on(VoteActions.add, (state)=>{
        return {
            ...state,
            addVoteSuccessMsg : '',
            addVoteErrorMsg : '',
            addVoteLoading : false,        
        }
    }),
    on(VoteActions.addSuccess, (state, action)=>{
        return {
            ...state,
            addVoteSuccessMsg : action.response.message,
            addVoteErrorMsg : '',
            addVoteLoading : false,        
        }
    }),
    on(VoteActions.addFailure, (state, action)=>{
        return {
            ...state,
            addVoteSuccessMsg : '',
            addVoteErrorMsg : action.message,
            addVoteLoading : false,        
        }
    }),


    // handle the getting incident actions
    on(VoteActions.get, (state)=>{
        return {
            ...state,
            votes:[],
            voteError:'',
            voteLoading:true,                
        }
    }),
    on(VoteActions.getSuccess, (state, action)=>{
        return {
            ...state,
            votes:action.votes,
            voteError:'',
            voteLoading:false,         
        }
    }),
    on(VoteActions.getFailure, (state, action)=>{
        return {
            ...state,
            votes:[],
            voteError:action.message,
            voteLoading:false,       
        }
    }),

    /* all these have errors? why*/

    // // get incidents by a specific id
    // on(VoteActions.getIncident, (state, action)=>{
    //     return {
    //         ...state,
    //         id: action.id,      
    //     }
    // }),

    // // get user incidents
    // on(VoteActions.getUserIncident, (state, action)=>{
    //     return {
    //         ...state,
    //         userId: action.userId,      
    //     }
    // }),

    // // sensor user incidents
    // on(VoteActions.sensorIncident, (state, action)=>{
    //     return {
    //         ...state,
    //         id: action.id,      
    //     }
    // }),

    // // delete user incidents
    // on(VoteActions.deleteIncident, (state, action)=>{
    //     return {
    //         ...state,
    //         id: action.id,      
    //     }
    // })


)