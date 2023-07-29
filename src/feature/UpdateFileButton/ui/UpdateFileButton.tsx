import { createRef, memo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { uploadFileByHref, useLazyGetFilesByPathQuery } from 'entities/Disk'
import { Button } from 'shared/ui/Button'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import classNames from 'classnames'

interface UpdateFileButtonProps {
  className?: string
}

export const UpdateFileButton = memo((props: UpdateFileButtonProps) => {
  const { className } = props
  const dispatch = useAppDispatch()

  const [usePath] = useSearchParams()
  const path = usePath.get('path') || ''
  const [fetch] = useLazyGetFilesByPathQuery()
  const filesInput = createRef<HTMLInputElement>()
  const handleUpdateFiles = () => {
    if (filesInput.current?.files && filesInput.current.files.length) {
      if (filesInput.current.files.length > 100) {
        alert('Не больше 100 файлов')
        return
      }
      Array.from(filesInput.current.files).forEach(async (file) => {
        await dispatch(uploadFileByHref({ path, file }))
        fetch(path)
      })
      filesInput.current.files = null
    }
  }
  const handleSelectInput = () => {
    filesInput.current?.click()
  }

  return (
    <>
      <Button className={classNames([className])} onClick={handleSelectInput}>
        Загрузить файлы
      </Button>
      <input ref={filesInput} onChange={handleUpdateFiles} type='file' multiple hidden />
    </>
  )
})
