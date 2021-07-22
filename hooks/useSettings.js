import { useEffect, useState } from "react";
import { delivery } from "../contentful";

export const useSettings = () => {
  const [settings, setSettings] = useState();

  const getProducts = async () => {
    const query = await delivery.getEntries({
      content_type: "settings",
    });

    if (query.items) {
      const fields = query.items[0].fields;
      const settingsObj = {
        facebook: {
          share: {
            img: fields.shareFbImage.fields.file.url,
            text: fields.shareFbText,
          },
        },
      };
      setSettings(settingsObj);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    settings,
  };
};
