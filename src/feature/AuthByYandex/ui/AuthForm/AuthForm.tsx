import { Button } from 'shared/ui/Button'
import { Text } from 'shared/ui/Text'
import classNames from 'classnames'
import styles from './AuthForm.module.scss'

interface AuthFormProps {
  className?: string
}

export const AuthForm = (props: AuthFormProps) => {
  const { className } = props

  return (
    <div className={classNames(styles.authForm, [className])}>
      <div className={styles.authForm__header}>
        <Text title='Авторизация' />
      </div>
      <div className={styles.authForm__content}>
        <a
          target='_blank'
          href={`https://oauth.yandex.ru/authorize?response_type=token&client_id=${__CLIENT_ID__}`}
          rel='noreferrer'
        >
          <Button>Войти</Button>
        </a>
      </div>
    </div>
  )
}
