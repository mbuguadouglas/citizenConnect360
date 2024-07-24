import { createReducer, on } from "@ngrx/store"
import { Incident } from "../../models/incidents"
import { IncidentActions } from "../actions/incidents.actions"


// define the interface for getting an incident
export interface IncidentInterface {
    // get an incident
    id:string,

    // get user incidents
    userId:string,

    // getAllIncidents
    incidents:Array<Incident>
    incidentError:string,
    incidentLoading:boolean,


    // addIncident
    addIncidentSuccessMsg : string,
    addIncidentErrorMsg : string,
    addIncidentLoading : boolean
}

//initialize the initial state of the slice
const initialState:IncidentInterface = {
    // get an incident
    id:'',

    // get user incidents
    userId:'',

    // getAllIncidents
    incidents:[],
    incidentError:'',
    incidentLoading:false,


    // addIncident
    addIncidentSuccessMsg : '',
    addIncidentErrorMsg : '',
    addIncidentLoading : false,

}

export const incidentReducer = createReducer(
    initialState,
    // handle the adding incident actions
    on(IncidentActions.add, (state)=>{
        return {
            ...state,
            addIncidentSuccessMsg : '',
            addIncidentErrorMsg : '',
            addIncidentLoading : false,        
        }
    }),
    on(IncidentActions.addSuccess, (state, action)=>{
        return {
            ...state,
            addIncidentSuccessMsg : action.response.message,
            addIncidentErrorMsg : '',
            addIncidentLoading : false,        
        }
    }),
    on(IncidentActions.addFailure, (state, action)=>{
        return {
            ...state,
            addIncidentSuccessMsg : '',
            addIncidentErrorMsg : action.message,
            addIncidentLoading : false,        
        }
    }),


    // handle the getting incident actions
    on(IncidentActions.get, (state)=>{
        return {
            ...state,
            incidents:[],
            incidentError:'',
            incidentLoading:true,                
        }
    }),
    on(IncidentActions.getSuccess, (state, action)=>{
        return {
            ...state,
            incidents:action.incidents,
            incidentError:'',
            incidentLoading:false,         
        }
    }),
    on(IncidentActions.getFailure, (state, action)=>{
        return {
            ...state,
            incidents:[],
            incidentError:action.message,
            incidentLoading:false,       
        }
    }),

    /* all these have errors? why*/

    // // get incidents by a specific id
    // on(IncidentActions.getIncident, (state, action)=>{
    //     return {
    //         ...state,
    //         id: action.id,      
    //     }
    // }),

    // // get user incidents
    // on(IncidentActions.getUserIncident, (state, action)=>{
    //     return {
    //         ...state,
    //         userId: action.userId,      
    //     }
    // }),

    // // sensor user incidents
    // on(IncidentActions.sensorIncident, (state, action)=>{
    //     return {
    //         ...state,
    //         id: action.id,      
    //     }
    // }),

    // // delete user incidents
    // on(IncidentActions.deleteIncident, (state, action)=>{
    //     return {
    //         ...state,
    //         id: action.id,      
    //     }
    // })


)