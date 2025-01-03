import { getPreviewVideo } from '@/actions/workspace'
import { QueryClient } from '@tanstack/react-query'
import React from 'react'

type Props = {
    params : {
        videoId : string
    }
}

const page = async({params : {videoId}}: Props) => {
    const query = new QueryClient;
    await query.prefetchQuery({
        queryKey : ['preview-video'],
        queryFn : () => getPreviewVideo(videoId)
    })
  return (
    <div>page</div>
  )
}

export default page