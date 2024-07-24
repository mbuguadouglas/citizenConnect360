import { createFeatureSelector, createSelector } from "@ngrx/store";
import { VoteInterface } from "../reducers/votes.reducers";




const votesFeatureSelector = createFeatureSelector<VoteInterface>('votes')


export const votesSelector = createSelector(votesFeatureSelector, (state)=> state.votes)
export const votesIdSelector = createSelector(votesFeatureSelector, (state)=> state.id)
export const votesUserIdSelector = createSelector(votesFeatureSelector, (state)=> state.userId)

// filter for a specific vote
export const voteSelector = createSelector(
    votesSelector,
    votesIdSelector,
    (votes, id) => votes.filter(x=> x.id===id)
)

// filter vote posted by specific user
export const userVoteSelector = createSelector(
    votesSelector,
    votesUserIdSelector,
    (votes, id) => votes.filter(x=> x.id===id)
)