import { bindActionCreators } from '@reduxjs/toolkit';
import { playerActions } from '@/store/reducers/PlayerReducer';
import { useAppDispatch } from './useAppDispatch';
import { commentsActions } from '@/store/reducers/CommentReducer';

const actions = {
  ...playerActions,
};

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(actions, dispatch);
} 