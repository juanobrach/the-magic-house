import { useEffect, useState } from "react";
import { delivery } from "../contentful";

export const useEvents = () => {
  const lang = "en-US";
  const [activeEvent, setActiveEvent] = useState();

  const getEvent = async () => {
    const gt = new Date().toISOString();
    const query = await delivery.getEntries({
      content_type: "event",
      "fields.date[gte]": gt,
    });

    if (query.total) {
      const event = {
        name: query.items[0].fields.name,
        date: query.items[0].fields.date,
        links: {
          eventBrite: query.items[0].fields.eventBrite,
          veno: query.items[0].fields.veno,
        },
        flyer: query.items[0].fields.flyer.fields.file.url,
      };
      setActiveEvent(event);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

  return {
    activeEvent,
  };
};
