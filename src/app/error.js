"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <h2 className="text-xl font-bold text-center text-red-500 mb-4">
          {error.message}
        </h2>
        <button className="btn btn-primary btn-small" onClick={() => reset()}>
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
