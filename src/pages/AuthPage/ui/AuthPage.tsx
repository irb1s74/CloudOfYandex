import { AuthForm } from 'feature/AuthByYandex'
import { Page } from 'widgets/Page'
import styles from './AuthPage.module.scss'

const AuthPage = () => {
  return (
    <Page className={styles.authPage}>
      <AuthForm />
    </Page>
  )
}
export default AuthPage
