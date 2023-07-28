export interface IFile {
  resource_id: string
  name: string
  type: string
  path: string
}

export interface Disk {
  name: string
  _embedded: {
    sort: string
    items: IFile[]
  }
}

export interface DiskSchema {}
