import React from 'react'
import VideoCardMenu from './video-card-menu'
import Loader from '../loader'

type Props = {
    User: {
      firstname: string | null
      lastname: string | null
      image: string | null
    } | null
    id: string
    Folder: {
      id: string
      name: string
    } | null
    createdAt: Date
    title: string | null
    source: string
    processing: boolean
    workspaceId: string
  }

const VideoCard = (props: Props) => {
  return (
    <Loader>
      <div>
        <VideoCardMenu
        currentFolderName={props.Folder?.name}
        videoId={props.id}
        currentWorkspace={props.workspaceId}
        currentFolder= { props.Folder?.id}

        >

        </VideoCardMenu>
      </div>
    </Loader>
  )
}

export default VideoCard