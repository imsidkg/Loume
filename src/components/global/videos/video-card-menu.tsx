import React from 'react'
import Loader from '../loader'

type Props = {
    videoId : string
    currentWorkspace : string
    currentFolder? : string
    currentFolderName? : string
}

const VideoCardMenu = (props: Props) => {
  return (
   <Loader>
    <div>
        <div>
          
        </div>
    </div>
   </Loader>
  )
}

export default VideoCardMenu