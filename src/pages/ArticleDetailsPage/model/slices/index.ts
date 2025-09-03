import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { articleDetailsPageRecommendataionsReducer } from './articleDetailsPageRecommendtaionsSlice';
import { ArticleDetailsPageSchema } from '../types';

export const articleDetailsPageReducer =
  combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsPageRecommendataionsReducer,
    comments: articleDetailsCommentsReducer,
  });
