"use client";

import Banner from "@/components/home/Banner";
import Jobs from "@/components/home/Jobs";
import Companies from "@/components/home/Companies";
import Banner2 from "@/components/home/Banner2";
import Dashboard from "@/components/home/Dashboard";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Jobs />
      <Companies />
      <Banner2 />
      <Dashboard />
    </>
  );
};

export default HomePage;
