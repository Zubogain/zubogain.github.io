import { Children, isValidElement, cloneElement } from "react";

export const childrenWithProps = (children, props) =>
  Children.map(children, (child) => {
    // checking isValidElement is the safe way and avoids a typescript error too
    if (isValidElement(child)) {
      return cloneElement(child, { ...props });
    }
    return child;
  });
