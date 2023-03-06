import React from "react";

import { useField } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const PhoneInputField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  return (
    <div>
      {" "}
      <PhoneInput
        {...props}
        {...field}
        country={"gh"}
        value={field.value}
        defaultCountry="NO"
        onChange={(value) => {
          helpers.setValue(value);
        }}
      />
    </div>
  );
};
