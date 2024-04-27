import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      {session?.user && (
        <div>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}
          </h1>
          <h1 className="text-2xl text-center mt-10">
            Login email: {session?.user?.email}
          </h1>
          <Image
            className="rounded-full mx-auto my-5"
            src={
              session?.user?.image ||
              "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
            }
            width={150}
            height={150}
            alt="User Image"
          />
        </div>
      )}
    </>
  );
};

export default DashboardPage;
