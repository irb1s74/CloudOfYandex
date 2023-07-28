import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AppRouter } from 'app/providers/router'
import { PageLoader } from 'widgets/PageLoader'
import { getUserInited, initAuthData } from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

const App = memo(() => {
  const dispatch = useAppDispatch()
  const inited = useSelector(getUserInited)

  useEffect(() => {
    if (!inited) {
      dispatch(initAuthData())
    }
  }, [inited])

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
