"use client";

import FolderDuotone from "@/components/icons/folder-duotone";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import React from "react";
import Folder from "./folder";
import { useQueryData } from "@/hooks/useQueryData";
import { getWorkspaceFolders } from "@/actions/workspace";
import { useMutationDataState } from "@/hooks/useMutationData";
import Videos from "../videos";

type Props = {
  workspaceId: string;
};

export type FoldersProps = {
  status: number;
  data: Array<{
    _count: {
      videos: number;
    };
    id: string;
    name: string;
    createdAt: Date;
    workSpaceId: string | null;
  }>;
};

const Folders = ({ workspaceId }: Props) => {
  // Fetch data
  const { data, isFetched, error } = useQueryData(["workspace-folder"], () =>
    getWorkspaceFolders(workspaceId)
  );

  const { latestVariables } = useMutationDataState(["create-folders"]);

  const {status , data:folders} = (data ?? {status : 404 , data:[]}) as FoldersProps

  return (
    <div className="flex flex-col gap-4" suppressHydrationWarning>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <FolderDuotone />
          <h2 className="text-[#BDBDBD] text-xl">Folders</h2>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[#BDBDBD]">See all</p>
          <ArrowRight color="#707070" />
        </div>
      </div>
      <div
        className={cn(
          status !== 200 && "justify-center",
          "flex items-center gap-4 overflow-x-auto w-full"
        )}
      >
        {!isFetched ? (
          <p className="text-neutral-300">Loading folders...</p>
        ) : error ? (
          <p className="text-red-500">Error fetching folders</p>
        ) : status !== 200 || folders.length === 0 ? (
          <p className="text-neutral-300">No folders in workspace</p>
        ) : (
          <>
            {latestVariables && latestVariables.status === "pending" && (
              <Folder
                name={latestVariables.variables.name}
                id={latestVariables.variables.id}
                optimistic
              />
            )}
            {folders.map((folder: FoldersProps["data"][number]) => (
              <Folder
                name={folder.name}
                count={folder._count.videos}
                id={folder.id}
                key={folder.id}
              />
            ))}
          </>
        )}
      </div>
      <Videos
        workspaceId={workspaceId}
        folderId={workspaceId}
        videosKey="user-videos"
      />
    </div>
  );
};

export default Folders;
