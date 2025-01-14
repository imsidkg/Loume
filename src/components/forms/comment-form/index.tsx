import { useVideoComment } from '@/hooks/useVideoComment'
import React from 'react'

type Props = {
    videoId: string
    commentId?: string
    author: string
    close?: () => void
}

const CommenForm = ({author, videoId, close, commentId}: Props) => {
    const {register , errors, isPending , onFormSubmit} = useVideoComment(videoId , commentId)

  return (
    <div>CommenForm</div>
  )
}

export default CommenForm