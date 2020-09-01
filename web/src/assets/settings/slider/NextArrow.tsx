import React from "react";
import Icon from "@mdi/react";
import { mdiArrowRightCircle } from "@mdi/js";

export default function NextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <Icon
      path={mdiArrowRightCircle}
      className={className}
      color="#8d99ae"
      size={1}
      // @ts-ignore
      onClick={onClick}
    />
  );
}
