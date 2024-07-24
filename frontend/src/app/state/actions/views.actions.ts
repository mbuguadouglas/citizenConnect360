import {createActionGroup, emptyProps, props} from '@ngrx/store'
import { View, viewsResponse } from '../../models/views'


// create all actions related to authentication
export const ViewActions = createActionGroup({
    source : 'VIEW API',
    events:{
        // add views events
        'add': props<{newView:View}>(), //action name -> VIEW API ADD
        'add success': props<{response:viewsResponse}>(),
        'add failure' : props<{message:string}>(),
        
        // get views events
        'get': emptyProps(), //nothing to pass in propd
        'get success': props<{views:Array<View>}>(),
        'get failure' : props<{message:string}>(),

        'get View': props<{id:string}>,
        'sensor View': props<{id:string}>,
        'delete View': props<{id:string}>

    }
})

// with the above two we have everyting we need from views,
// other rotes are created using id to filter out
