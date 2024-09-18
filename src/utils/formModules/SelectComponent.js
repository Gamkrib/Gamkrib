import { Field } from "formik";
import React from "react";

import { StyledLabel } from "../../components/auth/FormStyles";
import "./selectComp.css";

export const SelectComponent = (props) => {
  const { name, label, options, ...rest } = props;

  return (
    <div>
      <div>
        {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
        {label && <br />}
        <Field
          className="selectOption"
          as="select"
          id={name}
          name={name}
          {...rest}
        >
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.key}
              </option>
            );
          })}
        </Field>
        {/* <ErrorMessage name="email">
                  {(error) => <div className="error">{error}</div>}
                </ErrorMessage> */}
      </div>
    </div>
  );
};
