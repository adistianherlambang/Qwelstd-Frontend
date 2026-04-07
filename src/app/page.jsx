import Image from "next/image";
import "./style.css"

import MainLogo from "@/components/logo/MainLogo";
import ButtonHover from "@/components/button hover/buttonHover";
import TopSection from "@/components/section/top section/TopSection";
import ClientOnly from "@/components/client/ClientOnly";
import Title from "@/components/section/title/Title";
import Morph from "@/components/SVG/morph";

export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <MainLogo/>
        <div className="nav">
          <div className="navButton"></div>
          <ButtonHover>Kontak Kami</ButtonHover>
        </div>
      </div>
      <div className="contentWrapper">
        <ClientOnly><TopSection>Sahabat<b>UMKM</b></TopSection></ClientOnly>
        <Title>
          <div className="title">
            Jasa <span className="textPink">Kelola Sosial Media</span> & <span className="textPink">Branding UMKM </span>Profesional
          </div>
        </Title>
      </div>
      <Morph/>
      <p>QwelStudio adalah jasa kreatif digital yang fokus pada branding, desain visual, dan content marketing untuk UMKM, membantu membangun identitas brand dan strategi pemasaran yang efektif.</p>
      <div className="contentContainer">
        <div className="contentWrapper">
          <ClientOnly><TopSection>Masalah<b>UMKM</b></TopSection></ClientOnly>
          <Title>
            <div className="title">
              Jasa <span className="textPink">Kelola Sosial Media</span> & <span className="textPink">Branding UMKM </span>Profesional
            </div>
          </Title>
        </div>

      </div>
    </div>
  );
}
