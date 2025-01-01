import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useMoveVideos } from "@/hooks/useMoveFolders";
import React from "react";

type Props = {
  videoId: string;
  currentFolder?: string;
  currentWorkspace?: string;
  currentFolderName?: string;
};

const ChangeVideoLocation = ({
  videoId,
  currentFolder,
  currentFolderName,
  currentWorkspace,
}: Props) => {

  const {onFormSubmit,
    errors,
    register,
    isPending,
    folders,
    workspaces,
    isFetching,
    isFolders,} = useMoveVideos(videoId , currentWorkspace!)
  return <form>
    <div>
        <h2>
          <p>Workspace</p>
          <p>This video has no folder</p>
        </h2>
    </div>
    <Separator orientation="horizontal"/>
    <div>
        <h2>To</h2>
        <Label>Workspace</Label>
        <Select></Select>
    </div>
  </form>
};

export default ChangeVideoLocation;
