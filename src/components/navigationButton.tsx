'use client'

import { useRouter } from "next/navigation";
import style from '@/styles/components/navigationButtons.module.css'
import { useEffect, useState } from "react";
import { pages } from "@/utils/appRoutes";
import { colors } from "@/styles/constants";

type props = {
    previousPage: string,
    currentPage: string,
    nextPage: string|null,
    navigateColor: string, 
    currentPageStyle:  { readonly [key: string]: string }
}

export default function NavigationButtons({currentPage, nextPage, currentPageStyle, navigateColor, previousPage}: props){
    
    const router = useRouter()
    const style = currentPageStyle;

    const showNextPageButton = (
        <div 
            onClick={() => router.push(nextPage as string)}
            >
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.66658 28.1667L35.0349 28.1667L22.9233 40.2784L25.9999 43.3334L43.3333 26L25.9999 8.66671L22.9449 11.7217L35.0349 23.8334L8.66658 23.8334V28.1667Z"/>
            </svg>
        </div>
    )
    
    return (
        <div className={style.buttonGroup}>
            {/* left button */}
            <div 
                onClick={() => router.push(previousPage)}
            >
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M43.3334 23.8333H16.9651L29.0767 11.7216L26.0001 8.66663L8.66675 26L26.0001 43.3333L29.0551 40.2783L16.9651 28.1666H43.3334V23.8333Z"/>
                </svg>
            </div>
            {/* middle button */}
            <div onClick={() => router.replace(`${pages.navigate.href}/${navigateColor.replace('#','')}`)}
                className={style.middleButton}
            >{currentPage}</div>

            {/* right button */}
            {nextPage && showNextPageButton}
        </div>
    );
}