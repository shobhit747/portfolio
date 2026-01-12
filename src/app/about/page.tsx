import Header from "@/components/header";
import ContactBar from '@/components/contactBar'
import { pages } from "@/utils/appRoutes";
import style from '@/styles/pages/about.module.css'
import NavigationButtons from "@/components/navigationButton";

export default function Home() {
  return (
    <div style={{backgroundColor: '#F7E8A4'}}>
      <Header currentPage={pages.about.title} />
      <ContactBar currentPage={pages.about.title}/>
      <div className={style.content}>
        <p> Hii I’m Shobhit S. Thakur,<br/>
            A computer science and engineering student graduating in 2026.
            <br/>
            <br />
            My main line of interest aligns with working on software and tools that provide meaningful value to the end users. 
            <br />
            <br />
            I enjoy working on backend systems, native applications, and other projects that involves interacting with the lower level system.
        </p>
      </div>
      <NavigationButtons currentPage={pages.about.title} nextPage={pages.techStack.href} currentPageStyle={style}/>
    </div>
  );
}
