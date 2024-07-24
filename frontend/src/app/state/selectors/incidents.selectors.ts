import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IncidentInterface } from "../reducers/incidents.reducers";



const incidentsFeatureSelector = createFeatureSelector<IncidentInterface>('incidents')




export const incidentsSelector = createSelector(incidentsFeatureSelector, (state)=> state.incidents)
export const incidentsIdSelector = createSelector(incidentsFeatureSelector, (state)=> state.id)
export const incidentsUserIdSelector = createSelector(incidentsFeatureSelector, (state)=> state.userId)

// filter for a specific incident
export const incidentSelector = createSelector(
    incidentsSelector,
    incidentsIdSelector,
    (incidents, id) => incidents.filter(x=> x.id===id)
)

// filter incident posted by specific user
export const userIncidentSelector = createSelector(
    incidentsSelector,
    incidentsUserIdSelector,
    (incidents, id) => incidents.filter(x=> x.id===id)
)