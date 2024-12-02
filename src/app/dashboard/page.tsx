import { onAuthenticateUser } from "@/actions/user";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const auth = await onAuthenticateUser();
  if (auth.status === 201 || auth.status === 200) {
    redirect(`/dashboard/${auth.user?.firstName}${auth.user?.lastName}`);
  }
  if (auth.status === 400 || auth.status === 500 || auth.status === 404) {
    redirect("/auth/sign-in");
  }

  return <div>page</div>;
};

export default page;
