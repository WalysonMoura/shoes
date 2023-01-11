import { useContext } from "react";
import Head from "next/head";
import Image from "next/image";
//import { Inter } from '@next/font/google'

import * as Style from "../styles/pages/home";
//Icons

//import { ProdutoContext } from "../contexts/ProdutoContext";
// Components
import MenuUser from "../components/MenuUser";
import Search from "../components/Search";
import Offers from "../components/Offers";

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const (heloword) = useContext(ProdutoContext)

  return (
    <Style.Conteiner>
      <MenuUser />
      <Search />
      <Style.Offers>
        <Offers />
      </Style.Offers>
      <div>
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>
    </Style.Conteiner>
  );
}
