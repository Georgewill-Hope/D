import React from "react";
import Card from "./Card";
import { featuredData } from "@/constants";

const Featured = () => {
  return (
    <section className="box py-20 px-3 md:px-8">
      <h3 className="font-semibold text-center text-2xl mb-5">
        Featured Brands
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {featuredData.map((item, i) => (
          <Card key={i} src={item} />
        ))}
      </div>
    </section>
  );
};

export default Featured;
