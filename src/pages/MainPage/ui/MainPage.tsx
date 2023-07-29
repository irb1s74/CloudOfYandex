import { useState } from 'react'
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import { Page } from 'widgets/Page'
import { UpdateFileButton } from 'feature/UpdateFileButton'
import { LogoutButton } from 'feature/LogoutButton'
import { useGetFilesByPathQuery, type IFile, File } from 'entities/Disk'
import { Loader } from 'shared/ui/Loader'
import { Text } from 'shared/ui/Text'
import styles from './MainPage.module.scss'

const MainPage = () => {
  const navigate = useNavigate()

  const [usePath] = useSearchParams()
  const path = usePath.get('path') || ''

  const { data, isFetching } = useGetFilesByPathQuery(path || '/')
  const [selectedFile, selectFile] = useState<string>('')

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

  return (
    <Page className={styles.mainPage}>
      <header className={styles.mainPage__header}>
        {path && (
          <div onClick={handleGoBack} className={styles.mainPage__iconBtn}>
            <IoArrowBack size={22} />
          </div>
        )}
        <Text className={styles.mainPage__title} align='center' title={data?.name} />
        <UpdateFileButton />
        <LogoutButton className={styles.mainPage__profileInfo} />
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
