import { useEffect, useState } from "react";
import { delivery } from "../contentful";

export const useProducts = () => {
  const lang = "en-US";
  const [products, setProducts] = useState();

  const getProducts = async () => {
    const query = await delivery.getEntries({
      content_type: "product",
    });
    if (query.items) {
      const productsMapped = query.items.map(({ fields }) => {
        return {
          name: fields["name"],
          price: fields["price"],
          image: fields["image"].fields.file.url,
          sizes: [
            {
              name: "sm",
              stock: fields["sm"],
            },
            {
              name: "xs",
              stock: fields["xs"],
            },
          ],
        };
      });
      setProducts(productsMapped);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
  };
};
