import { memo } from 'react'
import classNames from 'classnames'
import { getFileIcon } from 'shared/lib/components/getFileIcon/getFileIcon'
import { type IFile } from '../../model/types/disk'
import styles from './File.module.scss'

interface FileProps {
  data: IFile
  active: boolean
  className?: string
}

export const File = memo((props: FileProps) => {
  const { data, active, className } = props

  return (
    <div className={classNames(styles.file, { [styles.file__active]: active }, [className])}>
      <div className={styles.file__icon}>{getFileIcon(data.type)}</div>
      <div className={styles.file__name}>{data.name}</div>
    </div>
  )
})
