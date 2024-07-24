


// create interface to represent our store

import { AuthInterface } from "./reducers/auth.reducers";
import { IncidentInterface } from "./reducers/incidents.reducers";
import { PollInterface } from "./reducers/polls.reducers";
import { ViewInterface } from "./reducers/views.reducers";
import { VoteInterface } from "./reducers/votes.reducers";

// prevent using generic type any
export interface AppState{
    // slices within our store
    auth:AuthInterface,
    incidents:IncidentInterface,
    views:ViewInterface,
    polls:PollInterface,
    votes:VoteInterface   

}