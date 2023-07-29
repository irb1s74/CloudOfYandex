import { memo } from 'react'
import { useSelector } from 'react-redux'
import { IoLogOut } from 'react-icons/io5'
import { getUserAuthData, userActions } from 'entities/User'
import { Text } from 'shared/ui/Text'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import classNames from 'classnames'
import styles from './LogoutButton.module.scss'

interface LogoutButtonProps {
  className?: string
}

export const LogoutButton = memo((props: LogoutButtonProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const authData = useSelector(getUserAuthData)

  const handleLogOut = () => {
    dispatch(userActions.logout())
  }

  return (
    <div className={classNames(styles.logoutButton, {}, [className])}>
      <Text text={authData?.display_name} />
      <div onClick={handleLogOut} className={styles.logoutButton__iconBtn}>
        <IoLogOut size={22} />
      </div>
    </div>
  )
})
