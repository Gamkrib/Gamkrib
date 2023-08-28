import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const PostingPropsContextProvider = createContext();
export const PostingPropertyContext = ({ children }) => {
    const [values, setValues] = useState();
    return (
        <PostingPropsContextProvider.Provider value={{ values, setValues }}>
            {children}
        </PostingPropsContextProvider.Provider>
    );
};

// export const SelectedPropertyContextProvider = ({ children }) => {
//     const [isActive, setIsActive] = useState("hostel");

//     return (
//         <SelectedPropertyContext.Provider value={{ isActive, setIsActive }}>
//             {children}
//         </SelectedPropertyContext.Provider>
//     );
// };
