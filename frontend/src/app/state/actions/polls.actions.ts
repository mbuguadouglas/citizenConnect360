import {createActionGroup, emptyProps, props} from '@ngrx/store'
import { Poll, pollsResponse } from '../../models/polls'


// create all actions related to authentication
export const PollActions = createActionGroup({
    source : 'POLL API',
    events:{
        // add views events
        'add': props<{newPoll:Poll}>(), //action name -> VIEW API ADD
        'add success': props<{response:pollsResponse}>(),
        'add failure' : props<{message:string}>(),
        
        // get views events
        'get': emptyProps(), //nothing to pass in propd
        'get success': props<{polls:Array<Poll>}>(),
        'get failure' : props<{message:string}>(),

        'get Poll': props<{id:string}>,
        'close Poll': props<{id:string}>,
        'delete Poll': props<{id:string}>

    }
})

// with the above two we have everyting we need from views,
// other rotes are created using id to filter out
