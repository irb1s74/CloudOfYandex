import { MainPage } from 'pages/MainPage'
import { AuthPage } from 'pages/AuthPage'
import { ConfirmPage } from 'pages/ConfirmPage/ui/ConfirmPage'
import { NotFoundPage } from 'pages/NotFoundPage'

import { AppRoutes, getRouteAuth, getRouteConfirm, getRouteMain } from 'shared/const/router'
import { type AppRoutesProps } from 'shared/types/router'

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
    authOnly: true,
  },
  [AppRoutes.AUTH]: {
    path: getRouteAuth(),
    element: <AuthPage />,
  },
  [AppRoutes.AUTH_CONFIRM]: {
    path: getRouteConfirm(),
    element: <ConfirmPage />,
  },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
}
