
import React from "react";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Banner />
        <div className="max-w-6xl mx-auto">
          <Categories />
          <Products />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
