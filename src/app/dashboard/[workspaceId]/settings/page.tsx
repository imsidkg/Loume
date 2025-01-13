'use client'
import { enableFirstView, getFirstView } from '@/actions/user'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

type Props = {}

const page = (props: Props) => {
  const [firstView , setFirstView] = useState<boolean | undefined>(undefined)
   useEffect(() => {
    if (firstView !== undefined) return
    const fetchData = async () => {
      const res = await getFirstView();
      if(res?.status == 200) setFirstView(res?.data)
    } 
    fetchData();
   },)

   async function switchState(checked : boolean) {
    const view= await enableFirstView(checked);
    if(view)  {
      toast(view.status === 200 ? 'Success' : 'Failed', {
        description: view.data,
      })
    }
   } 
 

  return (
    <div>
         <h2 className="text-2xl font-bold mt-4">Video Sharing Settings</h2>
      <p className="text-muted-foreground">
        Enabling this feature will send you notifications when someone watched
        your video for the first time. This feature can help during client
        outreach.
      </p>
      <Label className="flex items-center gap-x-3 mt-4 text-md">
        Enable First View
        <Switch
          onCheckedChange={switchState}
          disabled={firstView === undefined}
          checked={firstView}
          onClick={() => setFirstView(!firstView)}
        />
      </Label>
    </div>
  )
}

export default page