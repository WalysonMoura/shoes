import Image from "next/image";
import React from "react";
import * as Style from "./style";

import { FiHeart } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";

export default function MenuUser() {
  return (
    <Style.Conteiner>
      <Style.User>
        <Image src="/walyson.png" alt="user" width={180} height={37} priority />
        <div>
          <h3>Bom dia! 👋</h3>
          <h2>Walyson Moura</h2>
        </div>
      </Style.User>
      <Style.Icons>
        <FiHeart />
        <FaRegBell />
      </Style.Icons>
    </Style.Conteiner>
  );
}
