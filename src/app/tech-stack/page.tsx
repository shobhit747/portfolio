import ContactBar from "@/components/contactBar";
import Header from "@/components/header";
import { pages } from "@/utils/appRoutes";
import NavigationButtons from "@/components/navigationButton";
import TechStack from "@/components/techStack";

import style from '@/styles/pages/techStack.module.css'
import { colors } from "@/styles/constants";

export default function Home() {

  return (
    <div style={{backgroundColor:'black'}}>
      <Header currentPage={pages.techStack.title} />
      <ContactBar currentPage={pages.techStack.title}/>
      <div className={style.content}>
        <TechStack />
      </div>
      <NavigationButtons previousPage={pages.about.href} currentPage={pages.techStack.title} nextPage={pages.projects.href} currentPageStyle={style} navigateColor={colors.techStack.secondary}/>
    </div>
  );
}