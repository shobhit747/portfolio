'use client'

import Link from "next/link";
import NavigationButtons from "@/components/navigationButton";
import { pages } from "@/utils/appRoutes";
import { useRouter } from "next/navigation";
import Image from "next/image";
import style from '@/styles/pages/page.module.css'
import mainImage from '@/assets/images/header/main.svg'
import ContactBar from '@/components/contactBar'

export default function Home() {

  const router = useRouter();

  return (
    <div className={style.page}>
      <div className={style.content}>
        <p className={style.subText} >Hey There,<br/>Its me..</p>
        <Image src={mainImage} alt="" width={500} className={style.svgImage}/>
        <p className={style.subText} >A software development engineer, who turns ideas into reality.</p>
        
        <div className={style.knowMeButton} onClick={() => router.push(pages.about.href)}>
          know_me.sh
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.1581 32.3655C26.1581 32.5395 26.2926 32.6818 26.4547 32.6818H33.7691C33.9312 32.6818 34.0656 32.5395 34.0656 32.3655V30.4677C34.0656 30.2938 33.9312 30.1514 33.7691 30.1514H26.4547C26.2926 30.1514 26.1581 30.2938 26.1581 30.4677V32.3655ZM18.4523 32.6067L26.0435 26.2412C26.1937 26.1147 26.1937 25.8814 26.0435 25.7549L18.4523 19.3933C18.4065 19.3543 18.3504 19.3293 18.2908 19.3212C18.2312 19.3132 18.1705 19.3224 18.116 19.3478C18.0614 19.3732 18.0153 19.4137 17.9832 19.4645C17.951 19.5153 17.934 19.5743 17.9343 19.6345V22.1135C17.9343 22.2084 17.9739 22.2953 18.049 22.3546L22.3902 26L18.049 29.6454C18.0137 29.6749 17.9851 29.7118 17.9653 29.7534C17.9456 29.795 17.935 29.8405 17.9343 29.8865V32.3655C17.9343 32.6344 18.2467 32.7807 18.4523 32.6067ZM40.5498 10.185H11.4502C10.7504 10.185 10.185 10.7504 10.185 11.4502V40.5498C10.185 41.2496 10.7504 41.815 11.4502 41.815H40.5498C41.2496 41.815 41.815 41.2496 41.815 40.5498V11.4502C41.815 10.7504 41.2496 10.185 40.5498 10.185ZM38.9683 38.9683H13.0317V13.0317H38.9683V38.9683Z" fill="white"/>
          </svg>
        </div>
      </div>
      <ContactBar currentPage={pages.home.title} />
    </div>
  );
}
