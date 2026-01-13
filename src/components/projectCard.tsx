import Image, { StaticImageData } from "next/image";
import linkIcon from '@/assets/images/icons/link.svg'
import apiProject from '@/assets/images/projectImages/apiProject.png'

import style from '@/styles/components/projectCard.module.css'

type props = {
    name: string,
    description: string,
    projectImage: StaticImageData,
    projectLink: string
}

export default function ProjectCard({ name, description, projectImage, projectLink }: props){
    return (
        <div className={style.card}>
            <div className={style.cardHeader}>
                {name}
                <a href={projectLink}>
                    <Image src={linkIcon} alt=""/>
                </a>
            </div>
            <div style={{height:215,display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Image className={style.projectImg} style={{padding:0}} width={320} src={projectImage} alt=""/>
            </div>
            <p className={style.cardDescription}>{description}</p>
        </div>
    );
}