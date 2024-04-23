import Image from "next/image";

const AllShoesPage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    cache: "no-store", // server side rendering (when build the project all-shoes page didn't create static page)
  });
  const shoes = await res.json();
  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-5">All Shoes</h2>
      <div className="grid grid-cols-3 p-5 gap-4">
        {shoes?.map((shoe) => (
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
              <span className="font-bold text-red-500 ml-4">{shoe?.price}</span>
              <p>{shoe?.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllShoesPage;
