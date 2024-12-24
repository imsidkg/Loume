import { getNotifications, onAuthenticateUser } from '@/actions/user';
import { getWorkSpaces, verifyAccessToWorkspace } from '@/actions/workspace';
import GlobalHeader from '@/components/global/global-header';
import Sidebar from '@/components/global/sidebar';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {
    params : {workspaceId :string},
    children : React.ReactNode
}

const layout =async ({params , children}: Props) => {
  const {workspaceId} = await params
  
    const auth = await onAuthenticateUser();
    if(!auth.user?.workspace ) return redirect('/auth/sign-up')
    if(!auth.user?.workspace.length ) return redirect('/auth/sign-up')

    const hasAccess = await verifyAccessToWorkspace(workspaceId)

    if (hasAccess.status !== 200) {
      redirect(`/dashboard/${auth.user?.workspace[0].id}`)
    }


    if (!hasAccess.data?.workspace) {
      return null
    }


    const query = new QueryClient


    await query.prefetchQuery({
      queryKey: ['user-workspaces'],
      queryFn: () => getWorkSpaces(),
    })
  
    await query.prefetchQuery({
      queryKey: ['user-notifications'],
      queryFn: () => getNotifications(),
    })

  return (
    <HydrationBoundary state={dehydrate(query)}>
    <div className="flex h-screen w-screen">
      <Sidebar activeWorkspaceId={workspaceId} />
      <div className="w-full pt-28 p-6 overflow-y-scroll overflow-x-hidden">
        <GlobalHeader workspace={hasAccess.data.workspace} />
        <div className="mt-4">{children}</div>
      </div>
    </div>
  </HydrationBoundary>
  )
}

export default layout