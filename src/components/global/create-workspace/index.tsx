import { getWorkSpaces } from "@/actions/workspace";
import FolderPlusDuotine from "@/components/icons/folder-plus-duotone";
import { Button } from "@/components/ui/button";
import { useQueryData } from "@/hooks/useQueryData";
import React from "react";
import Modal from "../Modal";

type Props = {};

const createWorkspace = (props: Props) => {
  const { data } = useQueryData(["create-workspace"], getWorkSpaces);

  const { data: plan } = data as {
    status: number;
    data: {
      subscription: {
        plan: "FREE" | "PRO";
      } | null;
    };
  };

  if (plan.subscription?.plan === "FREE") {
    return <div></div>;
  }

  if (plan.subscription?.plan === "PRO") {
    <Modal
    title="Create a Workspace"
    description=" Workspaces helps you collaborate with team members. You are assigned a default personal workspace where you can share videos in private with yourself."
    trigger={
      <Button className="bg-[#1D1D1D] text-[#707070] flex items-center gap-2 py-6 px-4 rounded-2xl">
        <FolderPlusDuotine />
        Create Workspace
      </Button>
    }
  >
    <WorkspaceForm />
  </Modal>
  }

  return <div>createWorkspace</div>;
};

export default createWorkspace;
