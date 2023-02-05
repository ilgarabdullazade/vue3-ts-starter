import { PageConstant } from '@/constant/pageConstant';
import layout from '@/router/routes/layout';

export const RootRoute = {
  path: '/',
  name: 'Root',
  redirect: PageConstant.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

// Basic routing without permission
export const basicRoutes = [RootRoute, layout];
