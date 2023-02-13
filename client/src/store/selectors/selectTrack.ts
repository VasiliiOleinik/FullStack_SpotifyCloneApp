import { createSelector } from 'reselect';

const template = (state: any) => state.oneTrack;

export const selectTrack = createSelector(template, (state) => state);