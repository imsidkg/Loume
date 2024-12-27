'use client'
import { useCreateFolders } from '@/hooks/useCreateFolders';
import React from 'react'

type Props = {
   workspaceId : string
}

const CreateFolders = ({workspaceId}: Props) => {
    const {onCreateNewFolder} = useCreateFolders(workspaceId);
  return (
    <div>CreateFolders</div>
  )
}

export default CreateFolders