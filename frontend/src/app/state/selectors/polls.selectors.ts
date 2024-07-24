import { createFeatureSelector, createSelector } from "@ngrx/store"
import { PollInterface } from "../reducers/polls.reducers"



const pollsFeatureSelector = createFeatureSelector<PollInterface>('polls')

export const pollsSelector = createSelector(pollsFeatureSelector, (state)=> state.polls)
export const pollsIdSelector = createSelector(pollsFeatureSelector, (state)=> state.id)
export const pollsUserIdSelector = createSelector(pollsFeatureSelector, (state)=> state.userId)

// filter for a specific poll
export const pollSelector = createSelector(
    pollsSelector,
    pollsIdSelector,
    (polls, id) => polls.filter(x=> x.id===id)
)

// filter poll posted by specific user
export const userPollSelector = createSelector(
    pollsSelector,
    pollsUserIdSelector,
    (polls, id) => polls.filter(x=> x.id===id)
)