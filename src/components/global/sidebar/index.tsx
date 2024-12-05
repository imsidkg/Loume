'use client'
import { getWorkSpaces } from '@/actions/workspace'
import { Select } from '@/components/ui/select'
import { userQueryData } from '@/hooks/userQueryData'
import { Workspace } from '@/types/Workspace'
import React from 'react'

type Props = {
   activeWorkspaceId : string
}

const Sidebar = ({activeWorkspaceId}: Props) => {


  const {data , isPending} = userQueryData(['user-workspaces'] , getWorkSpaces)
  const {data : workspace} = data as Workspace

  return (
    <div><Select defaultValue={activeWorkspaceId} >hi from sidebar</Select></div>
  )
}

export default Sidebar