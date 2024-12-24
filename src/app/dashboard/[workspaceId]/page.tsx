'use client'
import { useParams } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import CreateWorkspace from '@/components/global/create-workspace'

type Props = {}

const page = (props: Props) => {
   
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
              {/* <CreateForlders workspaceId={workspaceId} /> */}
            </div>
          </div>
          <section className="py-9">
            <TabsContent value="videos">
              {/* <Folders workspaceId={workspaceId} /> */}
            </TabsContent>
          </section>
        </Tabs>
      </div>
  )
}

export default page