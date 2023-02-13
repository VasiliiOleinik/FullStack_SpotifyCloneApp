import { createSelector } from 'reselect';

const template = (state: any) => state.player;

export const selectPlayerData = createSelector(template, (state) => state);