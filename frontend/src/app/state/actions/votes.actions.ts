import {createActionGroup, emptyProps, props} from '@ngrx/store'
import { Votes, votesResponse } from '../../models/votes'


// create all actions related to authentication
export const VoteActions = createActionGroup({
    source : 'VOTE API',
    events:{
        // add views events
        'add': props<{newVote:Votes}>(), //action name -> VIEW API ADD
        'add success': props<{response:votesResponse}>(),
        'add failure' : props<{message:string}>(),
        
        // get views events
        'get': emptyProps(), //nothing to pass in propd
        'get success': props<{votes:Array<Votes>}>(),
        'get failure' : props<{message:string}>(),

        'get Vote': props<{id:string}>,
        // 'update Vote': props<{id:string}>,
        'delete Vote': props<{id:string}>

    }
})

// with the above two we have everyting we need from views,
// other rotes are created using id to filter out
