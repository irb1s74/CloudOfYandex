import { memo } from 'react'
import { AppRouter } from 'app/providers/router'
import classNames from 'classnames'

const App = memo(() => {
  return (
    <div className={classNames('app')}>
      <AppRouter />
    </div>
  )
})
export default App
