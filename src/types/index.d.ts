export type FolderProps  = {
    status : number ,
    data : {
        name : string ,
        _count : {
            videos : number
        }
    }
}

export type VideosProps = {
    status: number
    data: {
      User: {
        firstname: string | null
        lastname: string | null
        image: string | null
      } | null
      id: string
      processing: boolean
      Folder: {
        id: string
        name: string
      } | null
      createdAt: Date
      title: string | null
      source: string
    }[]
  }
