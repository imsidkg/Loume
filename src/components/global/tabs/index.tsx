import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

type Props = {
  triggers: string[];
  children: React.ReactNode;
  defaultValue: string;
};

const TabMenu = ({ triggers, children, defaultValue }: Props) => {
  return <Tabs defaultValue={defaultValue}>
    <TabsList>
        {triggers.map((trigger) => {
            return (
                <TabsTrigger value={trigger}>{trigger}</TabsTrigger>
            )
        })}
    </TabsList>
  </Tabs>;
};

export default TabMenu;
