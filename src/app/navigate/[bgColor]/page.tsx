import Link from "next/link";
import { pages } from "@/utils/appRoutes";
import style from '@/styles/pages/navigate.module.css'
import ContactBar from '@/components/contactBar'

export function generateStaticParams() {
  return [{ bgColor: '2DC7FF' }, { bgColor: 'C46AF0' }, { bgColor: 'F7E8A4' }]
}

export default async function NavigationPage({ params }: { params: Promise<{ bgColor: string }> }) {
  let { bgColor } = await params;
  bgColor = bgColor.replace('.txt','')
  
  if(!bgColor){
    bgColor = 'white'
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
