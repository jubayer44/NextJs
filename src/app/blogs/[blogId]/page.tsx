import BlogDetails from "@/components/ui/BlogDetails";
import { IBlog } from "@/types";

interface IBlogParams {
  params: {
    blogId: string;
  };
}

// generateStaticParams use korar pore j ids return korbe sugula static vabe build hobe, baki gola SSR hobe, (orthad, user experience valo korar honno nirdisto kichu data static valbe build korar smy create hoye jabe)
export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return blogs?.slice(0, 3)?.map((blog: IBlog) => ({
    blogId: blog.id,
  }));
};

const BlogDetailsPage = async ({ params }: IBlogParams) => {
  const res = await fetch(`http://localhost:5000/blogs/${params?.blogId}`, {
    cache: "no-store",
  });
  const blog = await res.json();
  return (
    <div className="my-5">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
