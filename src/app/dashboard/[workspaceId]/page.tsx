'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import CreateWorkspace from '@/components/global/create-workspace'
import CreateFolders from '@/components/global/create-folders'
import Folders from '@/components/global/folders'
import { getWorkspaceFolders } from '@/actions/workspace'
import { useQuery } from '@tanstack/react-query'
import { use } from 'react'


type Props = {
  params: Promise<{ workspaceId: string }>
}

const page = ({params}: Props) => {
    // const {workspaceId} = await params
    const workspace = use(params)
    const workspaceId = workspace.workspaceId
    console.log("sdfssssssssssssssssss",workspaceId)
// console.log(params.workspaceId)
   


    const {data , isFetched , error} = useQuery({
      queryKey : ['workspace-folders'],
      queryFn : () => {
        console.log("getWorkspaceFolders is being invoked with workspaceId:", workspaceId);
        return getWorkspaceFolders(workspaceId);
      }
    
      
    })
  
    
    
    console.log('data :', data)
    
  return (
    <div>
        <Tabs
          defaultValue="videos"
          className="mt-6"
        >
          <div className="flex w-full justify-between items-center">
            <TabsList className="bg-transparent gap-2 pl-0">
              <TabsTrigger
                className="p-[13px] px-6 rounded-full data-[state=active]:bg-[#252525]"
                value="videos"
              >
                Videos
              </TabsTrigger>
              <TabsTrigger
                value="archive"
                className="p-[13px] px-6 rounded-full data-[state=active]:bg-[#252525]"
              >
                Archive
              </TabsTrigger>
            </TabsList>
            <div className="flex gap-x-3">
              <CreateWorkspace />
              <CreateFolders workspaceId={workspaceId} />
            </div>
          </div>
          <section className="py-9">
            <TabsContent value="videos">
              <Folders workspaceId={workspaceId} />
            </TabsContent>
          </section>
        </Tabs>
      </div>
  )
}

export default page