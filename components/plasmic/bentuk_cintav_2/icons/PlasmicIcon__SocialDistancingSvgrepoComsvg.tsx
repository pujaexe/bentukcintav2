// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SocialDistancingSvgrepoComsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function SocialDistancingSvgrepoComsvgIcon(
  props: SocialDistancingSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h48v48H0z"} fill={"none"}></path>

      <path
        d={
          "M16 27.828V28h.172L21 32.828V28h6v4.828L31.828 28H32v-.172L33.829 26 32 24.172V24h-.172L27 19.172V24h-6v-4.828L16.172 24H16v.172L14.171 26zM40 14c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0 1c-2.206 0-4 1.794-4 4v8c0 1.474.81 2.75 2 3.444V42h4V30.444c1.19-.694 2-1.969 2-3.444v-8c0-2.206-1.794-4-4-4zM10 42V30.444c1.19-.694 2-1.969 2-3.444v-8c0-2.206-1.794-4-4-4s-4 1.794-4 4v8c0 1.474.81 2.75 2 3.444V42h4zM8 14c1.654 0 3-1.346 3-3S9.654 8 8 8s-3 1.346-3 3 1.346 3 3 3z"
        }
      ></path>
    </svg>
  );
}

export default SocialDistancingSvgrepoComsvgIcon;
/* prettier-ignore-end */
