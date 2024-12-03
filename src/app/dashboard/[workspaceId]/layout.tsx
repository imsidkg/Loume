import { onAuthenticateUser } from '@/actions/user';
import { verifyAccessToWorkspace } from '@/actions/workspace';
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {
    params : {workspaceId :string},
    children : React.ReactNode
}

const layout =async ({params: {workspaceId} , children}: Props) => {

    const auth = await onAuthenticateUser();
    if(!auth.user?.workspace ) return redirect('/auth/sign-up')
    if(!auth.user?.workspace.length ) return redirect('/auth/sign-up')

    const hasAccess = await verifyAccessToWorkspace(workspaceId)

  return (
    <div>layout</div>
  )
}

export default layout