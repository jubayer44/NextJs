import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Home page",
  description: "This is the home page",
};

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    // cache: "force-cache",
    next: {
      revalidate: 30,
    }, // revalidate every 30 seconds (fetch and generate static page when it changes)
  });
  const shoes = await res.json();

  // throw new Error("Error from Home page"); // for testing error page

  return (
    <div className="text-center my-10">
      <h2 className="text-2xl font-bold text-center my-10">Shows Home page</h2>
      <div className="flex justify-between p-5 gap-4">
        {shoes?.slice(0, 3)?.map((shoe) => (
          <div
            key={shoe?.id}
            className="card card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <Image
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                width={400}
                height={400}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{shoe?.name}</h2>
              <span className="ml-4 text-red-500 font-bold">
                ${shoe?.price}
              </span>
              <p>{shoe?.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href="/all-shoes">
        <button className="btn btn-primary">All Shoes</button>
      </Link>
    </div>)
}


export default HomePage
