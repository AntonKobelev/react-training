import React from 'react';
import Navbar from "./navbar";

const Page = () => {
  const logoUrl = "https://picsum.photos/100";
  const sitename = "example.com";

  return (
    <>
      <header>
        <div>{sitename}</div>{" "}
        <img src={logoUrl} alt="logo" />
        <Navbar />
      </header>
      <footer>подвал</footer>
    </>
  );
};

export default Page;
