'use client'

import Link from "next/link";
import { pages } from "@/utils/appRoutes";
import { useRouter } from "next/navigation";
import style from '@/styles/pages/navigate.module.css'
import ContactBar from '@/components/contactBar'

export default async function NavigationPage({ params }: { params: Promise<{ bgColor: string }> }) {
  let { bgColor } = await params;
  console.log(bgColor);
  
  
  if(!bgColor){
    bgColor = 'blue'
  }else{
    bgColor = `#${bgColor}`
  }
    
  return (
    <div className={style.page} style={{backgroundColor: bgColor}}>
        <div className={style.links}>
            <Link href={pages.home.href} title="Home">Home</Link>
            <Link href={pages.about.href} title="About">About</Link>
            <Link href={pages.techStack.href} title="Tech Stack">Tech Stack</Link>
            <Link href={pages.projects.href} title="Projects">Projects</Link>
        </div>
        <ContactBar currentPage={pages.navigate.title} />
    </div>
  );
}
