import { memo, type ReactNode } from 'react'

import cls from './Page.module.scss'
import classNames from 'classnames'

export const PAGE_ID = 'PAGE_ID'

interface PageProps {
  className?: string
  children: ReactNode
}

export const Page = memo((props: PageProps) => {
  const { className, children } = props

  return (
    <main id={PAGE_ID} className={classNames(cls.Page, {}, [className])}>
      {children}
    </main>
  )
})
