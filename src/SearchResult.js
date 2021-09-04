import React from "react";
import { useStateValue } from "./StateProvider";
import Product from "./Product";

function SearchResult() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="searchresult">
      {basket
        .filter((item) => {
          if (sproduct == "") {
            return item;
          } else if (
            item.title.toLowerCase().includes(sproduct.toLowerCase())
          ) {
            return item;
          }
        })
        .map((item) => {
          return (
            <Product
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              weight={item.weight}
              unit={item.unit}
              rating={item.rating}
            />
          );
        })}
    </div>
  );
}

export default SearchResult;
