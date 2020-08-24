import React from "react";

import { CustomButtonContainer } from "./ButtonStyles";

const Button = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default Button;
