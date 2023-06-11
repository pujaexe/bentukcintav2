// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClockSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClockSvgrepoComsvgIcon(props: ClockSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.0"}
      viewBox={"0 0 64 64"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M32 0C14.328 0 0 14.328 0 32s14.328 32 32 32 32-14.328 32-32S49.672 0 32 0zm10.844 42.844c-1.566 1.566-4.168 1.488-5.734-.078l-7.934-7.934a3.942 3.942 0 01-.867-1.305A3.95 3.95 0 0128 32V16c0-2.211 1.789-4 4-4s4 1.789 4 4v14.344l6.859 6.859a3.977 3.977 0 01-.015 5.641z"
        }
      ></path>
    </svg>
  );
}

export default ClockSvgrepoComsvgIcon;
/* prettier-ignore-end */
