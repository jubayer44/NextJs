"use server";

import { TFormValues } from "@/app/login/page";

export const loginUser = async (data: TFormValues) => {
  const res = await fetch(`${process.env.BACKEND_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userInfo = res.json();
  return userInfo;
};
