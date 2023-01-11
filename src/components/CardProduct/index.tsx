import Image from "next/image";
import React from "react";

import * as Style from "./style";
//Icons
import { FiHeart } from "react-icons/fi";
import { BsStarFill } from 'react-icons/bs';

interface Infos {
  name: string;
  stars: number;
  solds: number;
  price: number;
}

export default function CardProduct({ name, stars, solds,price }: Infos) {
  return (
    <Style.Conteiner>
      <Style.Favorite>
        <FiHeart />
      </Style.Favorite>
      <Image src="/{}.svg" alt="sapato" width={180} height={37} />
      <div>
        <h2>{name}</h2>
        <p>
          <span><BsStarFill/>{stars}</span> | <span>{solds} Vendidos</span>
        </p>
        <h2>R$ {price}</h2>
      </div>
    </Style.Conteiner>
  );
}
