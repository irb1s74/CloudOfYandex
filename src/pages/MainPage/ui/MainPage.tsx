import { createRef, useState } from 'react'
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import { Page } from 'widgets/Page'
import { useGetFilesByPathQuery, type IFile, File, uploadFileByHref } from 'entities/Disk'
import { Loader } from 'shared/ui/Loader'
import { Text } from 'shared/ui/Text'
import { Button } from 'shared/ui/Button'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import styles from './MainPage.module.scss'

const MainPage = () => {
  const dispatch = useAppDispatch()
  const [usePath] = useSearchParams()
  const path = usePath.get('path') || '/'
  const filesInput = createRef<HTMLInputElement>()
  const { data, isFetching } = useGetFilesByPathQuery(path || '/')
  const [selectedFile, selectFile] = useState<string>('')
  const navigate = useNavigate()

  const handleSelectFiles = (file: IFile) => {
    return () => {
      selectFile(file.resource_id)
    }
  }

  const handleToNavigate = (file: IFile) => {
    return () => {
      navigate({
        pathname: '',
        search: `?${createSearchParams({
          path: `${file.path}`,
        })}`,
      })
    }
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  const handleUpdateFiles = async () => {
    if (filesInput.current?.files && filesInput.current.files.length) {
      if (filesInput.current.files.length > 100) {
        alert('Не больше 100 файлов')
        return
      }
      const path = data?.name || 'disk'
      const formData = new FormData()
      Array.from(filesInput.current.files).forEach((file) => {
        formData.append('file', file)
      })
      await dispatch(uploadFileByHref({ path, formData }))
      filesInput.current.files = null
    }
  }

  const handleSelectInput = () => {
    filesInput.current?.click()
  }

  return (
    <Page className={styles.mainPage}>
      <header className={styles.mainPage__header}>
        {path && (
          <div onClick={handleGoBack} className={styles.mainPage__iconBtn}>
            <IoArrowBack size={22} />
          </div>
        )}
        <Text className={styles.mainPage__title} align='center' title={data?.name} />
        <Button onClick={handleSelectInput}>Загрузить файлы</Button>
        <input ref={filesInput} onChange={handleUpdateFiles} type='file' multiple hidden />
      </header>
      {isFetching ? (
        <div className={styles.mainPage__loader}>
          <Loader />
        </div>
      ) : (
        <div className={styles.mainPage__grid}>
          {data?._embedded.items?.map((file, index) => (
            <div
              onClick={
                selectedFile === file.resource_id && file.type === 'dir'
                  ? handleToNavigate(file)
                  : handleSelectFiles(file)
              }
              key={`${index}-${file.resource_id}`}
              className={styles.mainPage__gridItem}
            >
              <File data={file} active={selectedFile === file.resource_id} />
            </div>
          ))}
        </div>
      )}
    </Page>
  )
}
export default MainPage
