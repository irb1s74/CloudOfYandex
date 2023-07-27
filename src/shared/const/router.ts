export enum AppRoutes {
  MAIN = 'main',
  AUTH = 'auth',
  AUTH_CONFIRM = 'auth_confirm',
  NOT_FOUND = 'not_found', // last
}

export const getRouteMain = () => '/'
export const getRouteAuth = () => '/auth'
export const getRouteConfirm = () => 'confirm'

// export const AppRouteByPathPattern: Record<string, AppRoutes> = {
//     [getRouteMain()]: AppRoutes.MAIN,
//     [getRouteSettings()]: AppRoutes.SETTINGS,
//     [getRouteAbout()]: AppRoutes.ABOUT,
//     [getRouteProfile(':id')]: AppRoutes.PROFILE,
//     [getRouteArticles()]: AppRoutes.ARTICLES,
//     [getRouteArticleDetails(':id')]: AppRoutes.ARTICLE_DETAILS,
//     [getRouteArticleCreate()]: AppRoutes.ARTICLE_CREATE,
//     [getRouteArticleEdit(':id')]: AppRoutes.ARTICLE_EDIT,
//     [getRouteAdmin()]: AppRoutes.ADMIN_PANEL,
//     [getRouteForbidden()]: AppRoutes.FORBIDDEN,
// };
