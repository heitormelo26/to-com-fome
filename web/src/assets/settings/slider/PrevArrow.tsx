import React from "react";
import Icon from "@mdi/react";
import { mdiArrowLeftCircle } from "@mdi/js";

export default function PrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <Icon
      path={mdiArrowLeftCircle}
      className={className}
      color="#8d99ae"
      size={1}
      // @ts-ignore
      onClick={onClick}
    />
  );
}
