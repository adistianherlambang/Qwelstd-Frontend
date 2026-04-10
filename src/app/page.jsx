import Image from "next/image";
import "./style.css"

import MainLogo from "@/components/logo/MainLogo";
import BigLogo from "@/components/logo/BigLogo";
import ButtonHover from "@/components/button hover/buttonHover";
import TopSection from "@/components/section/top section/TopSection";
import ClientOnly from "@/components/client/ClientOnly";
import Title from "@/components/section/title/Title";
import Morph from "@/components/SVG/morph";
import Nav, {NavOpen} from "@/components/nav/Nav";
import Background from "@/components/background/Background";

export default function Home() {
  return (
    <>
    <Background/>
    <div className="container">
      <div className="header">
        <MainLogo/>
        <Nav/>
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
      <p className="desc">QwelStudio adalah jasa kreatif digital yang fokus pada branding, desain visual, dan content marketing untuk UMKM, membantu membangun identitas brand dan strategi pemasaran yang efektif.</p>
      <p className="trust">
        Dipercaya <b>UMKM</b> untuk meningkatkan branding dan penjualan digital 
      </p>
      <div className="contentContainer">
        <div className="contentWrapper">
          <ClientOnly><TopSection>Masalah<b>UMKM</b></TopSection></ClientOnly>
          <Title>
            <div className="title">
              Kenapa Banyak UMKM <span className="textPink">Sulit Berkembang </span>di Digital?
            </div>
          </Title>
        </div>
        <div className="problemWrapper">
          <div className="problem">
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="3" cy="3" r="3" fill="#EE3E75"/>
            </svg>
            <p>Tidak punya strategi</p>
          </div>
          <div className="problem">
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="3" cy="3" r="3" fill="#EE3E75"/>
            </svg>
            <p>Konten tidak konsisten</p>
          </div>
          <div className="problem">
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="3" cy="3" r="3" fill="#EE3E75"/>
            </svg>
            <p>Branding tidak profesional</p>
          </div>
          <div className="problem">
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="3" cy="3" r="3" fill="#EE3E75"/>
            </svg>
            <p>Tidak ada waktu kelola sosial media</p>
          </div>
        </div>
      </div>
      <div className="contentContainer">
        <div className="contentWrapper">
          <ClientOnly><TopSection>Framework Visual</TopSection></ClientOnly>
          <Title>
            <div className="title">
              QWEL growth <span className="textPink">framework</span>
            </div>
          </Title>
        </div>
        <div className="frameworkContainer">
          <div className="frameworkWrapper">
            <div className="frameworkIcon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.9067 21.9067L17.0792 17.0706M19.7544 10.6074C19.7544 13.0334 18.7907 15.36 17.0754 17.0754C15.36 18.7908 13.0334 19.7544 10.6074 19.7544C8.18151 19.7544 5.85494 18.7908 4.13954 17.0754C2.42414 15.36 1.46045 13.0334 1.46045 10.6074C1.46045 8.18151 2.42414 5.85494 4.13954 4.13954C5.85494 2.42415 8.18151 1.46045 10.6074 1.46045C13.0334 1.46045 15.36 2.42415 17.0754 4.13954C18.7907 5.85494 19.7544 8.18151 19.7544 10.6074Z" stroke="white" strokeWidth="2.92089" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="framework">
              <p className="frameworkTitle">Brand Discovery</p>
              <p className="frameworkDesc">Mengidentifikasi karakter bisnis, target market, dan positioning sebagai dasar strategi.</p>
            </div>
          </div>
          <div className="frameworkWrapper">
            <div className="frameworkIcon">
              <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 22C9.065 22 7.70875 21.7111 6.43125 21.1332C5.15375 20.5553 4.0383 19.767 3.0849 18.7682C2.1315 17.7694 1.379 16.6008 0.8274 15.2625C0.2758 13.9242 0 12.5033 0 11C0 9.47833 0.28455 8.04833 0.85365 6.71C1.42275 5.37167 2.19275 4.2075 3.16365 3.2175C4.13455 2.2275 5.2675 1.44393 6.5625 0.8668C7.8575 0.289667 9.24 0.000733333 10.71 0C12.11 0 13.4313 0.252267 14.6737 0.7568C15.9162 1.26133 17.0058 1.958 17.9424 2.8468C18.879 3.7356 19.6227 4.78977 20.1736 6.0093C20.7245 7.22883 21 8.54407 21 9.955C21 12.0633 20.3875 13.6814 19.1625 14.8093C17.9375 15.9372 16.45 16.5007 14.7 16.5H12.7575C12.6 16.5 12.4908 16.5458 12.4299 16.6375C12.369 16.7292 12.3382 16.83 12.3375 16.94C12.3375 17.16 12.4687 17.4764 12.7312 17.8893C12.9937 18.3022 13.125 18.7741 13.125 19.305C13.125 20.2217 12.8845 20.9 12.4036 21.34C11.9227 21.78 11.2882 22 10.5 22ZM5.85375 11.6325C6.15125 11.3208 6.3 10.9267 6.3 10.45C6.3 9.97333 6.15125 9.57917 5.85375 9.2675C5.55625 8.95583 5.18 8.8 4.725 8.8C4.27 8.8 3.89375 8.95583 3.59625 9.2675C3.29875 9.57917 3.15 9.97333 3.15 10.45C3.15 10.9267 3.29875 11.3208 3.59625 11.6325C3.89375 11.9442 4.27 12.1 4.725 12.1C5.18 12.1 5.55625 11.9442 5.85375 11.6325ZM9.00375 7.2325C9.30125 6.92083 9.45 6.52667 9.45 6.05C9.45 5.57333 9.30125 5.17917 9.00375 4.8675C8.70625 4.55583 8.33 4.4 7.875 4.4C7.42 4.4 7.04375 4.55583 6.74625 4.8675C6.44875 5.17917 6.3 5.57333 6.3 6.05C6.3 6.52667 6.44875 6.92083 6.74625 7.2325C7.04375 7.54417 7.42 7.7 7.875 7.7C8.33 7.7 8.70625 7.54417 9.00375 7.2325ZM14.2537 7.2325C14.5512 6.92083 14.7 6.52667 14.7 6.05C14.7 5.57333 14.5512 5.17917 14.2537 4.8675C13.9562 4.55583 13.58 4.4 13.125 4.4C12.67 4.4 12.2937 4.55583 11.9962 4.8675C11.6987 5.17917 11.55 5.57333 11.55 6.05C11.55 6.52667 11.6987 6.92083 11.9962 7.2325C12.2937 7.54417 12.67 7.7 13.125 7.7C13.58 7.7 13.9562 7.54417 14.2537 7.2325ZM17.4037 11.6325C17.7012 11.3208 17.85 10.9267 17.85 10.45C17.85 9.97333 17.7012 9.57917 17.4037 9.2675C17.1062 8.95583 16.73 8.8 16.275 8.8C15.82 8.8 15.4437 8.95583 15.1462 9.2675C14.8487 9.57917 14.7 9.97333 14.7 10.45C14.7 10.9267 14.8487 11.3208 15.1462 11.6325C15.4437 11.9442 15.82 12.1 16.275 12.1C16.73 12.1 17.1062 11.9442 17.4037 11.6325ZM10.5 19.8C10.6575 19.8 10.7845 19.7542 10.8811 19.6625C10.9777 19.5708 11.0257 19.4517 11.025 19.305C11.025 19.0483 10.8937 18.7458 10.6312 18.3975C10.3687 18.0492 10.2375 17.5267 10.2375 16.83C10.2375 16.06 10.4912 15.4458 10.9987 14.9875C11.5062 14.5292 12.1275 14.3 12.8625 14.3H14.7C15.855 14.3 16.8438 13.9473 17.6663 13.2418C18.4888 12.5363 18.9 11.4407 18.9 9.955C18.9 7.73667 18.0908 5.8894 16.4724 4.4132C14.854 2.937 12.9332 2.19927 10.71 2.2C8.33 2.2 6.3 3.0525 4.62 4.7575C2.94 6.4625 2.1 8.54333 2.1 11C2.1 13.4383 2.9183 15.5148 4.5549 17.2293C6.1915 18.9438 8.1732 19.8007 10.5 19.8Z" fill="white"/>
              </svg>
            </div>
            <div className="framework">
              <p className="frameworkTitle">Visual Branding</p>
              <p className="frameworkDesc">Membangun identitas visual yang konsisten dan mudah dikenali.</p>
            </div>
          </div>
          <div className="frameworkWrapper">
            <div className="frameworkIcon">
              <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11.7391V3.26087C1 2.66125 1.24583 2.08619 1.68342 1.66219C2.121 1.2382 2.71449 1 3.33333 1H13.25C13.8688 1 14.4623 1.2382 14.8999 1.66219C15.3375 2.08619 15.5833 2.66125 15.5833 3.26087V11.7391C15.5833 12.3388 15.3375 12.9138 14.8999 13.3378C14.4623 13.7618 13.8688 14 13.25 14H3.33333C2.71449 14 2.121 13.7618 1.68342 13.3378C1.24583 12.9138 1 12.3388 1 11.7391ZM21.0293 1.83765L16.3627 5.86539C16.3012 5.91831 16.2519 5.98324 16.2181 6.05591C16.1843 6.12857 16.1668 6.20734 16.1667 6.28704V8.29696C16.1668 8.37666 16.1843 8.45542 16.2181 8.52809C16.2519 8.60076 16.3012 8.66569 16.3627 8.71861L21.0293 12.7463C21.1134 12.8187 21.2173 12.8659 21.3284 12.8824C21.4396 12.8989 21.5533 12.8839 21.6558 12.8392C21.7584 12.7946 21.8454 12.7221 21.9065 12.6306C21.9676 12.5392 22 12.4325 22 12.3236V2.26043C22 2.15148 21.9676 2.04484 21.9065 1.95336C21.8454 1.86187 21.7584 1.78943 21.6558 1.74476C21.5533 1.70009 21.4396 1.68509 21.3284 1.70157C21.2173 1.71805 21.1134 1.76531 21.0293 1.83765Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="framework">
              <p className="frameworkTitle">Content Production</p>
              <p className="frameworkDesc">Membuat konten desain, foto, dan video yang menarik dan relevan.</p>
            </div>
          </div>
          <div className="frameworkWrapper">
            <div className="frameworkIcon">
              <svg width="21" height="27" viewBox="0 0 21 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.625 23.0225L5.21719 21.9438C4.99844 21.2921 4.79631 20.6292 4.61081 19.9551C4.42531 19.2809 4.27744 18.6067 4.16719 17.9326L2.625 19.0112V23.0225ZM7.875 21.6067H13.125C13.5187 20.7079 13.8359 19.6126 14.0766 18.3209C14.3172 17.0292 14.4375 15.7088 14.4375 14.3596C14.4375 12.1348 14.0766 10.0283 13.3547 8.04C12.6328 6.05169 11.6812 4.51775 10.5 3.4382C9.31875 4.51685 8.36719 6.05079 7.64531 8.04C6.92344 10.0292 6.5625 12.1357 6.5625 14.3596C6.5625 15.7079 6.68281 17.0283 6.92344 18.3209C7.16406 19.6135 7.48125 20.7088 7.875 21.6067ZM8.64675 14.0737C8.13225 13.5452 7.875 12.9101 7.875 12.1685C7.875 11.427 8.13225 10.7924 8.64675 10.2647C9.16125 9.73708 9.779 9.47281 10.5 9.47191C11.221 9.47101 11.8392 9.73528 12.3546 10.2647C12.8699 10.7942 13.1267 11.4288 13.125 12.1685C13.1232 12.9083 12.8664 13.5434 12.3546 14.0737C11.8427 14.604 11.2245 14.8679 10.5 14.8652C9.7755 14.8625 9.15775 14.5987 8.64675 14.0737ZM18.375 23.0225V19.0112L16.8328 17.9326C16.7234 18.6067 16.576 19.2809 16.3905 19.9551C16.205 20.6292 16.0024 21.2921 15.7828 21.9438L18.375 23.0225ZM10.5 0C12.6656 1.61798 14.301 3.67416 15.4061 6.16854C16.5112 8.66292 17.0634 11.5618 17.0625 14.8652L19.8187 16.7528C20.1906 17 20.4807 17.3258 20.6889 17.7303C20.8972 18.1348 21.0009 18.5618 21 19.0112V27L14.4703 24.3034H6.52969L0 27V19.0112C0 18.5618 0.104125 18.1348 0.312375 17.7303C0.520625 17.3258 0.81025 17 1.18125 16.7528L3.9375 14.8652C3.9375 11.5618 4.49006 8.66292 5.59519 6.16854C6.70031 3.67416 8.33525 1.61798 10.5 0Z" fill="white"/>
              </svg>
            </div>
            <div className="framework">
              <p className="frameworkTitle">Digital Activation</p>
              <p className="frameworkDesc">Menjalankan distribusi konten untuk meningkatkan reach dan engagement.</p>
            </div>
          </div>
          <div className="frameworkWrapper">
            <div className="frameworkIcon">
              <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7 9.26778L19.152 1.53056L20.9685 2.58611L15.477 12.1389L8.6415 8.18056L3.633 16.8889H21V19H0V0H2.1V15.3478L7.875 5.27778L14.7 9.26778Z" fill="white"/>
              </svg>
            </div>
            <div className="framework">
              <p className="frameworkTitle">Growth Evaluation</p>
              <p className="frameworkDesc">Menganalisis performa dan mengoptimalkan strategi secara berkelanjutan.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contentContainer">
        <div className="contentWrapper" style={{alignItems: "center", textAlign: "center"}}>
          <ClientOnly><TopSection>Masalah<b>UMKM</b></TopSection></ClientOnly>
          <Title>
            <div className="title">
              Kenapa Banyak UMKM <span className="textPink">Sulit Berkembang </span>di Digital?
            </div>
          </Title>
        </div>
        <div className="solusiWrapper">
          <div className="solusiTitle">
            <b>01</b>
            <p>Jasa Branding UMKM</p>
          </div>
          <p>Membangun identitas brand yang kuat, konsisten, dan mudah dikenali untuk meningkatkan kepercayaan pelanggan.</p>
          <div className="solusiSection">
            <p className="solusiItem">Logo Design</p>
            <hr />
            <p className="solusiItem">Brand identity</p>
            <hr />
            <p className="solusiItem">Brand guideline</p>
            <hr />
          </div>
        </div>
        <div className="solusiWrapper">
          <div className="solusiTitle">
            <b>02</b>
            <p>Jasa Social Media Management</p>
          </div>
          <p>Mengelola media sosial secara profesional agar lebih aktif, terarah, dan meningkatkan engagement serta penjualan.</p>
          <div className="solusiSection">
            <p className="solusiItem">Content Planning</p>
            <hr />
            <p className="solusiItem">Desain Feed</p>
            <hr />
            <p className="solusiItem">Caption & Hashtag</p>
            <hr />
            <p className="solusiItem">Posting</p>
            <hr />
          </div>
        </div>
        <div className="solusiWrapper">
          <div className="solusiTitle">
            <b>03</b>
            <p>Jasa Konten Instagram & TikTok</p>
          </div>
          <p>Membuat konten kreatif dan menarik untuk meningkatkan awareness dan daya tarik brand di platform digital.</p>
          <div className="solusiSection">
            <p className="solusiItem">Desain Konten</p>
            <hr />
            <p className="solusiItem">Foto Produk</p>
            <hr />
            <p className="solusiItem">Video Reels</p>
            <hr />
          </div>
        </div>
      </div>
      <div className="ctaContainer">
        <Title>
          <div className="title">
            Siap <span className="textPink">Meningkatkan Branding</span> dan <span className="textPink">Penjualan Bisnis</span> Kamu?
          </div>
        </Title>
        <div className="cta">
          <p>Konsultasi Gratis via WhatsApp</p>
          <div>
            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.75 5.25L12.75 5.25M12.75 5.25L8.25 9.75M12.75 5.25L8.25 0.75" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="footerContainer">
        <p className="footerTitle">Jasa Kelola Sosial Media dan Branding UMKM Profesional</p>
        <div className="footerNavContainer">
          <div className="footerNavWrapper">
            <p className="footerNavTitle">Quick Access</p>
            <div className="footerNav">
              <a href="">Tentang Kami</a>
              <a href="">Masalah UMKM</a>
              <a href="">Framework Visual</a>
              <a href="">Solusi UMKM</a>
            </div>
          </div>
          <div className="footerNavWrapper">
            <p className="footerNavTitle">Social Media</p>
            <div className="footerNav">
              <div className="sosmed">
                <p>Instagram</p>
                <div className="sosmedIcon">
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 5.25L12.75 5.25M12.75 5.25L8.25 9.75M12.75 5.25L8.25 0.75" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="sosmed">
                <p>Tiktok</p>
                <div className="sosmedIcon">
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 5.25L12.75 5.25M12.75 5.25L8.25 9.75M12.75 5.25L8.25 0.75" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BigLogo/>
        <p className="copyright">© Copyright qwelstd 2026</p>
      </div>
    </div>
    </>
  );
}
