import { createWorkspace } from "@/actions/workspace";
import { useMutationData } from "./useMutationData";

export const useCreateWorskspace = () => {
    const {mutate , isPending} = useMutationData(
        ['create-workspace'],
        (data : {name:string} ) => {
            return createWorkspace(data.name)
        },
        'user-workspaces'
    )

    const {error , onFormSubmit , regiter}  = useZodForm(workspaceSchema ,mutate);

};
