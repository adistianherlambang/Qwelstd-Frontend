import Image from "next/image";
import ButtonHover from "@/components/button hover/buttonHover";
import "./style.css"

import MainLogo from "@/components/logo/MainLogo";

export default function Home() {
  return (
    <div className="container">
      {/* <ButtonHover>
        asdajhd
      </ButtonHover> */}
      <div className="header">
        <MainLogo/>
        <div className="nav">
          <div className="navButton"></div>
          <ButtonHover>Kontak Kami</ButtonHover>
        </div>
      </div>
    </div>
  );
}
