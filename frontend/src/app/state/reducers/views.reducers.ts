import { createReducer, on } from "@ngrx/store"
import { View } from "../../models/views"
import { ViewActions } from "../actions/views.actions"


// define the interface for getting an incident
export interface ViewInterface {
    // get an view
    id:string,

    // get user views
    userId:string,

    // getAllviews
    views:Array<View>
    viewError:string,
    viewLoading:boolean,


    // addView
    addViewSuccessMsg : string,
    addViewErrorMsg : string,
    addViewLoading : boolean
}

//initialize the initial state of the slice
const initialState:ViewInterface = {
    // get an view
    id:'',

    // get user views
    userId:'',

    // getAllViews
    views:[],
    viewError:'',
    viewLoading:false,


    // addView
    addViewSuccessMsg : '',
    addViewErrorMsg : '',
    addViewLoading : false,

}

export const viewReducer = createReducer(
    initialState,
    // handle the adding incident actions
    on(ViewActions.add, (state)=>{
        return {
            ...state,
            addViewSuccessMsg : '',
            addViewErrorMsg : '',
            addViewLoading : false,        
        }
    }),
    on(ViewActions.addSuccess, (state, action)=>{
        return {
            ...state,
            addViewSuccessMsg : action.response.message,
            addViewErrorMsg : '',
            addViewLoading : false,        
        }
    }),
    on(ViewActions.addFailure, (state, action)=>{
        return {
            ...state,
            addViewSuccessMsg : '',
            addViewErrorMsg : action.message,
            addViewLoading : false,        
        }
    }),


    // handle the getting incident actions
    on(ViewActions.get, (state)=>{
        return {
            ...state,
            views:[],
            viewError:'',
            viewLoading:true,                
        }
    }),
    on(ViewActions.getSuccess, (state, action)=>{
        return {
            ...state,
            views:action.views,
            viewError:'',
            viewLoading:false,         
        }
    }),
    on(ViewActions.getFailure, (state, action)=>{
        return {
            ...state,
            incidents:[],
            incidentError:action.message,
            incidentLoading:false,       
        }
    }),

    /* all these have errors? why*/

    // // get incidents by a specific id
    // on(ViewActions.getIncident, (state, action)=>{
    //     return {
    //         ...state,
    //         id: action.id,      
    //     }
    // }),

    // // get user incidents
    // on(ViewActions.getUserIncident, (state, action)=>{
    //     return {
    //         ...state,
    //         userId: action.userId,      
    //     }
    // }),

    // // sensor user incidents
    // on(ViewActions.sensorIncident, (state, action)=>{
    //     return {
    //         ...state,
    //         id: action.id,      
    //     }
    // }),

    // // delete user incidents
    // on(ViewActions.deleteIncident, (state, action)=>{
    //     return {
    //         ...state,
    //         id: action.id,      
    //     }
    // })


)