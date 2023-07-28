import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AppRouter } from 'app/providers/router'
import { PageLoader } from 'widgets/PageLoader'
import { getUserInited } from 'entities/User'
import { initAuthData } from 'entities/User/model/services/initAuthData'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

const App = memo(() => {
  const dispatch = useAppDispatch()
  const inited = useSelector(getUserInited)

  useEffect(() => {
    dispatch(initAuthData())
  }, [location])

  if (!inited) {
    return (
      <div className='app'>
        <PageLoader />
      </div>
    )
  }
  return (
    <div className='app'>
      <AppRouter />
    </div>
  )
})
export default App
