import { getAllUserVideos } from '@/actions/workspace'
import { useQueryData } from '@/hooks/useQueryData'
import { VideosProps } from '@/types'
import React from 'react'

type Props = {
  folderId : string
  videoKey : string
  workspaceId: string
}

const Videos = ({folderId ,videoKey , workspaceId}: Props) => {
  const {data: videoData} = useQueryData([videoKey] ,  () => getAllUserVideos(folderId))

  const {status : videosStatus , data : videos} = (videoData?? {status : 404 , data : []}) as VideosProps

  return (
    <div>Videos</div>
  )
}

export default Videos