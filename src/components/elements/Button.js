import React, { Fragment } from "react";
import "./Button.scss";
// import Button from "@material-ui/core/Button";
// import { primary } from "../../theme.scss";

function Button({ onClick, title, children, variant }) {
  return (
    <Fragment>
      <button className={"Button " + variant} onClick={onClick}>
        {title}
        {children}
      </button>
    </Fragment>
  );
}

export default Button;
