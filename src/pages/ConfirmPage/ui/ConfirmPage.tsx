import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { Page } from 'widgets/Page'
import { getUserAuthData, initAuthData } from 'entities/User'
import { Loader } from 'shared/ui/Loader'
import { getRouteMain } from 'shared/const/router'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import classNames from 'classnames'
import styles from './ConfirmPage.module.scss'

export const ConfirmPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const authData = useSelector(getUserAuthData)

  useEffect(() => {
    localStorage.setItem(USER_LOCALSTORAGE_KEY, location.hash?.split('=')[1].split('&')[0])
    dispatch(initAuthData())
  }, [location])

  useEffect(() => {
    if (authData) {
      navigate(getRouteMain())
    }
  }, [authData])

  return (
    <Page className={classNames(styles.confirmPage)}>
      <Loader />
    </Page>
  )
}
