import { createWorkspace } from "@/actions/workspace";
import { useMutationData } from "./useMutationData";
import { useZodForm } from "./useZodForm";
import { workspaceSchema } from "@/components/forms/schema";

export const useCreateWorskspace = () => {
    const {mutate , isPending} = useMutationData(
        ['create-workspace'],
        (data : {name:string} ) => {
            return createWorkspace(data.name)
        },
        'user-workspaces'
    )

    const {errors , onFormSubmit , register}  = useZodForm(workspaceSchema ,mutate);

};
