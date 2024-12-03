import { onAuthenticateUser } from "@/actions/user";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const auth = await onAuthenticateUser()
  console.log(auth)
  if (auth.status === 200 || auth.status === 201 || auth.status === 409)
    return redirect(`/dashboard/${auth.user?.workspace[0].id}`)

  if (auth.status === 403 || auth.status === 400 || auth.status === 500)
    return redirect('/auth/sign-in')
}

export default page;
