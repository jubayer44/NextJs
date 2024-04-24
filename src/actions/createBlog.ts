"use server";

import { IBlog } from "@/types";

export const createBlog = async (blog: IBlog) => {
  const res = await fetch("http://localhost:5000/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });

  const data = await res.json();
  return data;
};
