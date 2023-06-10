// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask2SvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask2SvgrepoComsvgIcon(props: Mask2SvgrepoComsvgIconProps) {
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
          "M14.587 35.935C16.958 38.433 20.298 40 24.005 40c3.707 0 7.049-1.568 9.419-4.066C36.197 35.267 44 28.865 44 24c0-1.761-.855-5.791-8.452-5.982l-11.544-6.296-11.543 6.296c-7.606.187-8.462 4.22-8.462 5.982 0 4.873 7.828 11.286 10.588 11.935zM17.048 28v-2H31v2H17.048zM29 30v2H19v-2h10zm-11.952-6v-2H31v2H17.048zM40 24c0 1.217-1.464 3.072-3.12 4.702.074-.558.125-1.124.125-1.702v-4.868C38.439 22.329 40 22.815 40 24zm-28.995-1.87V27c0 .583.052 1.153.127 1.715C9.47 27.082 7.999 25.22 7.999 24c0-1.188 1.569-1.673 3.006-1.87z"
        }
      ></path>
    </svg>
  );
}

export default Mask2SvgrepoComsvgIcon;
/* prettier-ignore-end */
