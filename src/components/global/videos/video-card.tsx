import React from "react";
import VideoCardMenu from "./video-card-menu";
import Loader from "../loader";
import CopyLink from "./copy-link";

type Props = {
  User: {
    firstname: string | null;
    lastname: string | null;
    image: string | null;
  } | null;
  id: string;
  Folder: {
    id: string;
    name: string;
  } | null;
  createdAt: Date;
  title: string | null;
  source: string;
  processing: boolean;
  workspaceId: string;
};

const VideoCard = (props: Props) => {
  const daysAgo = Math.floor(
    (new Date().getTime() - props.createdAt.getTime()) / (24 * 60 * 60 * 1000)
  );
  return (
    <Loader state={false}>
      <div>
        <VideoCardMenu
          currentFolderName={props.Folder?.name}
          videoId={props.id}
          currentWorkspace={props.workspaceId}
          currentFolder={props.Folder?.id}
       / >
          <CopyLink videoId= {props.id} className="p-0 h-5 bg-hover:bg-transparent" />
      
      </div>
    </Loader>
  );
};

export default VideoCard;
