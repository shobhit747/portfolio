import ContactBar from "@/components/contactBar";
import Header from "@/components/header";
import NavigationButtons from "@/components/navigationButton";
import { pages } from "@/utils/appRoutes";
import style from '@/styles/pages/projects.module.css';

export default function Home() {
  return (
    <div style={{backgroundColor:'black'}}>
      <Header currentPage={pages.projects.title} />
      <ContactBar currentPage={pages.projects.title}/>
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
      <NavigationButtons currentPage={pages.projects.title} nextPage={null} currentPageStyle={style}/>
    </div>
  );
}