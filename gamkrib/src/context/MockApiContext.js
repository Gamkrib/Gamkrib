import React, { createContext, useEffect, useState } from "react";

export const MockApiContext = createContext();

/*======================== Mock APi Header ===============================*/
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c2356ea906msh491a7bdbced25c8p1ca321jsncf59f3f6d19b",
    "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
  },
};
const api =
  "https://booking-com.p.rapidapi.com/v1/hotels/search?locale=en-gb&dest_type=city&checkin_date=2023-07-15&units=metric&checkout_date=2023-07-16&room_number=1&adults_number=2&filter_by_currency=AED&order_by=popularity&dest_id=-553173&children_number=2&include_adjacency=true&page_number=0";

/*=============xx=========== Mock APi Data ===============xx================*/

export const MockApiContextProvider = ({ children }) => {
  const [mockHotel, setMockHotel] = useState("");
  useEffect(() => {
    (async () => {
      let data = await fetch(api, options);

      const returnedData = await data.json();

      setMockHotel(returnedData.result);
    })();

    //   .then((response) => response.json())
    //   .then((response) => console.log(response))
    //   .catch((err) => console.error(err));
  }, [api]);

  const farm = "king";

  return (
    <MockApiContext.Provider value={{ mockHotel, farm }}>
      {children}
    </MockApiContext.Provider>
  );
};
