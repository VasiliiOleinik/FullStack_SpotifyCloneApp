import { createSelector } from 'reselect';

const template = (state: any) => state.comments;

export const selectComments = createSelector(template, (state) => state);