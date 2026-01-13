import ContactBar from "@/components/contactBar";
import Header from "@/components/header";
import NavigationButtons from "@/components/navigationButton";
import { pages } from "@/utils/appRoutes";
import ProjectCard from "@/components/projectCard";
import style from '@/styles/pages/projects.module.css';

import ytAudioImg from '@/assets/images/projectImages/ytAudio.png'
import steamWorkdown from '@/assets/images/projectImages/steamWorkDown.png'
import apiProject from '@/assets/images/projectImages/apiProject.png'
import { colors } from "@/styles/constants";

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
            projectLink="https://github.com/shobhit747/yt_audio"
            projectImage={ytAudioImg}
          />
          <ProjectCard 
            name="Steam Workdown" 
            description="Steam_Wrokdown is a desktop GUI application built using C++ and GTK 3 that allows users to download Steam Workshop items easily and efficiently."
            projectLink="https://github.com/shobhit747/Steam-WorkDown"
            projectImage={steamWorkdown}
          />
          <ProjectCard 
            name="NodeJS Backend" 
            description="Simple NodeJS backend API is a backend project that highlights the integration of NodeJS API with Docker, Docker Compose and Mongodb database. "
            projectLink="https://github.com/shobhit747/SImple-NodeJS-backend"
            projectImage={apiProject}
          />
        </div>
      </div>
      <NavigationButtons previousPage={pages.techStack.href} currentPage={pages.projects.title} nextPage={null} currentPageStyle={style} navigateColor={colors.projects.secondary}/>
    </div>
  );
}