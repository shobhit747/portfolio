import ContactBar from "@/components/contactBar";
import Header from "@/components/header";
import NavigationButtons from "@/components/navigationButton";
import { pages } from "@/utils/appRoutes";
import ProjectCard from "@/components/projectCard";
import style from '@/styles/pages/projects.module.css';

import ytAudioImg from '@/assets/images/projectImages/ytAudio.png'
import steamWorkdown from '@/assets/images/projectImages/steamWorkDown.png'
import apiProject from '@/assets/images/projectImages/apiProject.png'

export default function Home() {
  return (
    <div style={{backgroundColor:'black'}}>
      <Header currentPage={pages.projects.title} />
      <ContactBar currentPage={pages.projects.title}/>
      <div className={style.content}>
        <div className={style.cards}>
          <ProjectCard 
            name="YT Audio" 
            description="An Electron based desktop music player that allows you to download and play your favorite songs, podcasts, and other audio content directly from YouTube"
            projectLink=""
            projectImage={ytAudioImg}
          />
          <ProjectCard 
            name="Steam Workdown" 
            description="Steam_Wrokdown is a desktop GUI application built using C++ and GTK 3 that allows users to download Steam Workshop items easily and efficiently."
            projectLink=""
            projectImage={steamWorkdown}
          />
          <ProjectCard 
            name="NodeJS Backend" 
            description="Simple NodeJS backend API is a backend project that highlights the integration of NodeJS API with Docker, Docker Compose and Mongodb database. "
            projectLink=""
            projectImage={apiProject}
          />
        </div>
      </div>
      <NavigationButtons currentPage={pages.projects.title} nextPage={null} currentPageStyle={style}/>
    </div>
  );
}