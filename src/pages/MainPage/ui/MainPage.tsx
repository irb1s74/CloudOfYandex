import { createRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'
import { IoArrowBack, IoLogOut } from 'react-icons/io5'
import { Page } from 'widgets/Page'
import { getUserAuthData, userActions } from 'entities/User'
import { useGetFilesByPathQuery, type IFile, File, uploadFileByHref } from 'entities/Disk'
import { Loader } from 'shared/ui/Loader'
import { Text } from 'shared/ui/Text'
import { Button } from 'shared/ui/Button'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import styles from './MainPage.module.scss'

const MainPage = () => {
  const dispatch = useAppDispatch()
  const authData = useSelector(getUserAuthData)
  const navigate = useNavigate()

  const [usePath] = useSearchParams()
  const path = usePath.get('path') || ''

  const { data, isFetching, refetch } = useGetFilesByPathQuery(path || '/')
  const [selectedFile, selectFile] = useState<string>('')
  const filesInput = createRef<HTMLInputElement>()

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

  const handleUpdateFiles = () => {
    if (filesInput.current?.files && filesInput.current.files.length) {
      if (filesInput.current.files.length > 100) {
        alert('Не больше 100 файлов')
        return
      }
      Array.from(filesInput.current.files).forEach(async (file) => {
        await dispatch(uploadFileByHref({ path, file }))
        refetch()
      })
      filesInput.current.files = null
    }
  }

  const handleSelectInput = () => {
    filesInput.current?.click()
  }

  const handleLogOut = () => {
    dispatch(userActions.logout())
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
        <div className={styles.mainPage__profileInfo}>
          <Text text={authData?.display_name} />
          <div onClick={handleLogOut} className={styles.mainPage__iconBtn}>
            <IoLogOut size={22} />
          </div>
        </div>
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
