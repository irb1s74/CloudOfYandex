import classNames from 'classnames'
import cls from './PageLoader.module.scss'
import { Text } from 'shared/ui/Text'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames(cls.PageLoader, {}, [className])}>
    <Text text='Лоадер' />
  </div>
)
