import React from "react";
import { createContext } from "react";

const MockLandLordApiContext = createContext();

/*=============================== api here to update the landlord pages ================ */

export const MockLandLordApi = () => {
  return <MockLandLordApi.Provider>MockLandLordApi</MockLandLordApi.Provider>;
};
