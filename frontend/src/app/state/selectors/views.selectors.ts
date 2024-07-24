import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ViewInterface } from "../reducers/views.reducers";



const viewsFeatureSelector = createFeatureSelector<ViewInterface>('views')

export const viewsSelector = createSelector(viewsFeatureSelector, (state)=> state.views)
export const viewsIdSelector = createSelector(viewsFeatureSelector, (state)=> state.id)
export const viewsUserIdSelector = createSelector(viewsFeatureSelector, (state)=> state.userId)

// filter for a specific view
export const viewSelector = createSelector(
    viewsSelector,
    viewsIdSelector,
    (views, id) => views.filter(x=> x.id===id)
)

// filter view posted by specific user
export const userViewSelector = createSelector(
    viewsSelector,
    viewsUserIdSelector,
    (views, id) => views.filter(x=> x.id===id)
)