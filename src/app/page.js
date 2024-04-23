import Counter from "@/components/Counter/Counter";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen m-10">
      <div>
        <div className="text-3xl font-bold underline">This is Home page</div>
        <Counter />
      </div>
    </div>
  );
};

export default HomePage;
