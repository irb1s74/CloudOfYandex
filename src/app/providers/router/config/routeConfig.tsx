import { AuthPage } from 'pages/AuthPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { type AppRoutesProps } from 'shared/types/router'
import { AppRoutes, getRouteAuth, getRouteConfirm, getRouteMain } from 'shared/const/router'
import { ConfirmPage } from 'pages/ConfirmPage/ui/ConfirmPage'

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <div />,
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
