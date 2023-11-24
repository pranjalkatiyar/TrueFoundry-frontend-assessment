import React from "react";

const ErrorSection = () => {
  return (
    <div className="rounded-lg grow bg-red-100 grid place-items-center">
      <h1 className="mt-6 text-xl font-semibold text-red-700 text-center">
        Incorrect JSON
      </h1>
    </div>
  );
};

export default ErrorSection;
