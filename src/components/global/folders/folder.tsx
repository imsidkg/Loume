"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import Loader from "../loader";
import { cn } from "@/lib/utils";
import { useMutationData } from "@/hooks/useMutationData";
import { renameFolders } from "@/actions/workspace";
import { Input } from "@/components/ui/input";

type Props = {
  name: string;
  id: string;
  optimistic?: boolean;
  count?: number;
};

const Folder = ({ id, name, optimistic, count }: Props) => {
  const [onRename, setOnRename] = useState(false);
  const inputRef  = useRef<HTMLInputElement | null>(null)
  const folderCardRef = useRef<HTMLDivElement | null>(null) 
  const pathName = usePathname();
  const router = useRouter();
  const Rename = () => setOnRename(true);
  const Renamed = () => setOnRename(false);

  const {mutate , isPending} = useMutationData(
    ['rename-folders'],
    (data: { name: string }) => renameFolders(id, data.name),
    'workspace-folders',
    Renamed

  )

  function handleFolderClick() {
    router.push(`${pathName}/folder/${id}`);
  }

  function handleNameDoubleClick(e: React.MouseEvent<HTMLParagraphElement>) {
    e.stopPropagation();
    Rename();
  }

  function updateFolderName(e:React.FocusEvent<HTMLInputElement>){
    if(inputRef.current) {
      if(inputRef.current.value) {
        mutate({name : inputRef.current.value ,id})

      }else {
        Renamed();
      }
    }
  }
  return (
    <div
      onClick={() => handleFolderClick}
      ref={ folderCardRef}
      className={cn(
        optimistic && "opacity-60",
        "flex hover:bg-neutral-800 cursor-pointer transition duration-150 items-center gap-2 justify-between min-w-[250px] py-4 px-4 rounded-lg  border-[1px]"
      )}
    >
      <Loader state={false}>
        <div className="flex flex-col gap-[1px]">
         {onRename ? 
          <Input
          onBlur={(e: React.FocusEvent<HTMLInputElement>)=> {
            updateFolderName(e)
          }}
          autoFocus
          placeholder={name}
          className="border-none text-base w-full outline-none text-neutral-300 bg-transparent p-0"
          ref={inputRef}
          />:
          <p
          onClick={(e) => e.stopPropagation()}
          className="text-neutral-300"
          onDoubleClick={handleNameDoubleClick}
        >
          {name}
        </p>}
          <span>{count || 0}</span>
        </div>
      </Loader>
    </div>
  );
};

export default Folder;
