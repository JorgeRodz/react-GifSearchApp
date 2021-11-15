import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifSearchApp = () => {
  const [categories, setCategories] = useState(["One piece"]);

  return (
    <>
      <h1>🔍️ Gif Search APP 🔎</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {
          // prettier-ignore
          categories.map((category) => (
            <GifGrid
              key={category}
              category={category}
            />
          ))
        }
      </ol>
    </>
  );
};

export default GifSearchApp;
