import React, { cloneElement, useRef } from "react";
import { filterDOMProps } from "@react-aria/utils";
/**
 * A FileTrigger allows a user to access the file system with any pressable React Aria or React Spectrum component, or custom components built with usePress.
 */
export const FileTrigger = props => {
  const {
    children,
    onSelect,
    acceptedFileTypes,
    allowsMultiple,
    defaultCamera,
    acceptDirectory,
    ...rest
  } = props;
  const inputRef = useRef(null);
  const domProps = filterDOMProps(rest);

  // Make sure that only one child is passed to the component.
  const clonableElement = React.Children.only(children);

  // Clone the child element and add an `onClick` handler to open the file dialog.
  const mainElement = cloneElement(clonableElement, {
    onClick: () => {
      if (inputRef.current?.value) {
        inputRef.current.value = "";
      }
      inputRef.current?.click();
    }
  });
  return <>
            {mainElement}
            <input {...domProps} type="file" ref={inputRef} style={{
      display: "none"
    }} accept={acceptedFileTypes?.toString()} onChange={e => onSelect?.(e.target.files)} capture={defaultCamera} multiple={allowsMultiple}
    // @ts-expect-error
    webkitdirectory={acceptDirectory ? "" : undefined} />
        </>;
};