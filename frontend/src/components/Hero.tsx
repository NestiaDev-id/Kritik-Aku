import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-green-500 text-white py-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold">Welcome to QnA App</h2>
        <p className="mt-4 text-lg">Ask and get answers instantly with AI.</p>
      </div>
    </section>
  );
};

export default Hero;
