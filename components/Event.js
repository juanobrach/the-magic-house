import React, { useEffect } from "react";
import eventbrite from "eventbrite";

export const Event = () => {
  const sdk = eventbrite({
    baseUrl: "https://localhost:3000",
    token: "JQQ22XZBC2KXSGAFBDF6",
  });

  useEffect(() => {
    sdk.request("/users/me").then((res) => {
      console.log("res:", res);
    });
  }, []);

  return <div>Event</div>;
};
