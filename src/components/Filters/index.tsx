import React from "react";

import * as Style from "./style";
//Icons

interface Filters {
  name: string;
}

export default function Filters({ name }: Filters) {
  return <Style.Button>{name}</Style.Button>;
}
