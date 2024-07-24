import { createReducer, on } from "@ngrx/store"
import { Poll } from "../../models/polls"
import { PollActions } from "../actions/polls.actions"


// define the interface for getting an incident
export interface PollInterface {
    // get an poll
    id:string,

    // get user polls
    userId:string,

    // getAllpolls
    polls:Array<Poll>
    pollError:string,
    pollLoading:boolean,


    // addpoll
    addPollSuccessMsg : string,
    addPollErrorMsg : string,
    addPollLoading : boolean
}

//initialize the initial state of the slice
const initialState:PollInterface = {
    // get an poll
    id:'',

    // get user polls
    userId:'',

    // getAllpolls
    polls:[],
    pollError:'',
    pollLoading:false,


    // addPoll
    addPollSuccessMsg : '',
    addPollErrorMsg : '',
    addPollLoading : false,

}

export const pollReducer = createReducer(
    initialState,
    // handle the adding incident actions
    on(PollActions.add, (state)=>{
        return {
            ...state,
            addPollSuccessMsg : '',
            addPollErrorMsg : '',
            addPollLoading : false,        
        }
    }),
    on(PollActions.addSuccess, (state, action)=>{
        return {
            ...state,
            addPollSuccessMsg : action.response.message,
            addPollErrorMsg : '',
            addPollLoading : false,        
        }
    }),
    on(PollActions.addFailure, (state, action)=>{
        return {
            ...state,
            addPollSuccessMsg : '',
            addPollErrorMsg : action.message,
            addPollLoading : false,        
        }
    }),


    // handle the getting incident actions
    on(PollActions.get, (state)=>{
        return {
            ...state,
            polls:[],
            pollError:'',
            pollLoading:true,                
        }
    }),
    on(PollActions.getSuccess, (state, action)=>{
        return {
            ...state,
            polls:action.polls,
            pollError:'',
            pollLoading:false,         
        }
    }),
    on(PollActions.getFailure, (state, action)=>{
        return {
            ...state,
            polls:[],
            pollError:action.message,
            pollLoading:false,       
        }
    }),

    /* all these have errors? why*/

    // // get polls by a specific id
    // on(PollActions.getPoll, (state, action)=>{
    //     return {
    //         ...state,
    //         id: action.id,      
    //     }
    // }),

    // // get user polls
    // on(PollActions.getUserIncident, (state, action)=>{
    //     return {
    //         ...state,
    //         userId: action.userId,      
    //     }
    // }),

    // // sensor user incidents
    // on(PollActions.sensorIncident, (state, action)=>{
    //     return {
    //         ...state,
    //         id: action.id,      
    //     }
    // }),

    // // delete user incidents
    // on(PollActions.deleteIncident, (state, action)=>{
    //     return {
    //         ...state,
    //         id: action.id,      
    //     }
    // })


)