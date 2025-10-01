/* eslint-disable ulbi-tv-plugin/layer-imports */
import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
