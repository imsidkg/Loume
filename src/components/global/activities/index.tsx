import { getVideoComments } from '@/actions/user'
import { useQueryData } from '@/hooks/useQueryData'
import { VideoCommentProps } from '@/types'
import React from 'react'

type Props = {
  author: string
  videoId: string
}

const Activities = ({author , videoId }: Props) => {
  const {data} = useQueryData(['video-comment'] , () => getVideoComments(videoId))
  const { data: comments } = data as VideoCommentProps


  

  return (
    <div>Activities</div>
  )
}

export default Activities