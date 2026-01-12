'use client'

import { pages } from "@/utils/appRoutes";
import { useEffect, useState } from "react";

import mainImage from '@/assets/images/header/main.svg'
import aboutImage from '@/assets/images/header/about.svg'
import techStackImage from '@/assets/images/header/techStack.svg'
import projectImage from '@/assets/images/header/projects.svg'
import blankImg from '@/assets/images/blank.png'

import style from '@/styles/components/header.module.css'
import Image from "next/image";

type props = {
    currentPage: string
}

export default function Header({ currentPage }: props) {
    const [headerImage, setImage] = useState(blankImg)
    const [borderBottm, setBorderBottom] = useState('0.5px solid black')
    useEffect(()=>{
        if(currentPage !== pages.about.title){
            setBorderBottom('0.5px solid white')
        }
    },[currentPage]);
    useEffect(()=>{
            if(currentPage === pages.about.title){ setImage(aboutImage) }
            else if(currentPage === pages.techStack.title) { setImage(techStackImage) }
            else if(currentPage === pages.projects.title) { setImage(projectImage) }
        },[])

    return (
        <div className={style.header} style={{borderBottom: borderBottm}}>
            <Image src={headerImage} alt=""/>
        </div>
    );
}