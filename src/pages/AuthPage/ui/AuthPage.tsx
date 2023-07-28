import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Page } from 'widgets/Page'
import { AuthForm } from 'feature/AuthByYandex'
import { getUserAuthData } from 'entities/User'
import { getRouteMain } from 'shared/const/router'
import styles from './AuthPage.module.scss'

const AuthPage = () => {
  const authData = useSelector(getUserAuthData)

  if (authData) {
    return <Navigate to={getRouteMain()} />
  }

  return (
    <Page className={styles.authPage}>
      <AuthForm />
    </Page>
  )
}
export default AuthPage
