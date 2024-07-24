import {createActionGroup, emptyProps, props} from '@ngrx/store'
import { Incident, incidentsResponse } from '../../models/incidents';


// create all actions related to authentication
export const IncidentActions = createActionGroup({
    source : 'INCIDENT API',
    events:{
        // add incidents events
        'add': props<{newIncident:Incident}>(), //action name -> INCIDENT API ADD
        'add success': props<{response:incidentsResponse}>(),
        'add failure' : props<{message:string}>(),
        
        // get incidents events
        'get': emptyProps(), //nothing to pass in propd
        'get success': props<{incidents:Array<Incident>}>(),
        'get failure' : props<{message:string}>(),

        'get Incident': props<{id:string}>,
        'get User Incident': props<{userId:string}>,
        'sensor Incident': props<{id:string}>,
        'delete Incident': props<{id:string}>
    }
})

// with the above two we have everyting we need from incidents,
// other rotes are created using id to filter out
