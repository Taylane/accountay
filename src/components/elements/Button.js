import React, { Fragment } from "react";
import "./Button.scss";
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
