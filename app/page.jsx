import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>home</h1>
      <Link href="/loggin">login</Link>
    </div>
  );
};

export default Home;
