import { type ReactElement } from 'react'
import { FcDocument, FcFile, FcFolder, FcImageFile } from 'react-icons/fc'

const getFileIcon = (icon: string): ReactElement | null => {
  switch (icon) {
    case 'dir':
      return <FcFolder size='50' />
    case 'txt':
      return <FcDocument size='50' />
    case 'doc':
      return <FcDocument size='50' />
    case 'png':
      return <FcImageFile size='50' />
    case 'jpg':
      return <FcImageFile size='50' />
    case 'gif':
      return <FcImageFile size='50' />
    default:
      return <FcFile size='50' />
  }
}

export { getFileIcon }
