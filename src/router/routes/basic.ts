import { EXCEPTION_COMPONENT } from '@/router/constant';

// 404 on a page
export const PAGE_NOT_FOUND_ROUTE = {
  path: '/:path(.*)*',
  name: 'PageNotFound',
  component: EXCEPTION_COMPONENT,
  meta: {
    title: 'ErrorPage',
  },
};
