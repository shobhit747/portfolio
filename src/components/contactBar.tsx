'use client'

import { pages } from '@/utils/appRoutes'

import gmailIcon from '@/assets/images/icons/gmailIcon.svg'
import githubIcon from '@/assets/images/icons/githubIcon.svg'
import linkedinIcon from '@/assets/images/icons/linkedinIcon.svg'
import dividerIcon from '@/assets/images/icons/dividerIcon.svg'
import Image from 'next/image'

import style from '@/styles/components/contactBar.module.css'
import { useEffect, useState } from 'react'


type props = {
    currentPage: string
}

export default function Contact({ currentPage }: props){

    const [borderTextAndSvgColor, setBorderTextAndSvgColor] = useState('black');

    useEffect(()=>{
        if(currentPage === pages.techStack.title || currentPage === pages.projects.title){
            setBorderTextAndSvgColor('#fff')
        }
    },[currentPage]);

    const correctPage = currentPage === pages.home.title || currentPage === pages.navigate.title;
    const posStyle = correctPage ? 'fixed' : 'initial';
    const borderStyle = correctPage ? 'none' : `0.5px solid ${borderTextAndSvgColor}`;
    
    // let justifyContentStyle = correctPage ? 'center' : 'flex-start' 
    let [justifyContentStyle, setJustifyContentStyle] = useState(correctPage ? 'center' : 'flex-start' )
    useEffect(()=>{
        if(window.innerWidth <= 650){
            setJustifyContentStyle('center');
        }else{
            setJustifyContentStyle(correctPage ? 'center' : 'flex-start' );
        }
        window.addEventListener("resize",()=>{
            if(window.innerWidth <= 650){
                setJustifyContentStyle('center');
            }else{
                setJustifyContentStyle(correctPage ? 'center' : 'flex-start' );
            }
        })
    },[])
    return(
        <div className={style.bar} style={{
                position: posStyle,
                borderBottom: borderStyle,
                justifyContent: justifyContentStyle
            }}>
            <div className={style.mailDiv}>
                <a style={{color:borderTextAndSvgColor}} href="mailto:shobhit.dev.work@gmail.com">shobhit.dev.work@gmail.com</a>
                <a href="mailto:shobhit.dev.work@gmail.com">
                    {/* gmail icon svg */}
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path style={{fill:borderTextAndSvgColor}} d="M26.5342 7.66414L24.7208 9.08081L17 14.8183L9.27916 9.02414L7.46583 7.60747C7.03864 7.25408 6.51715 7.03378 5.96598 6.97387C5.41481 6.91396 4.85818 7.01707 4.36504 7.27042C3.8719 7.52378 3.46392 7.91625 3.19166 8.39921C2.91939 8.88217 2.7948 9.4344 2.83333 9.98747V26.4066C2.83333 26.9176 3.03631 27.4077 3.39763 27.769C3.75895 28.1303 4.24901 28.3333 4.75999 28.3333H9.27916V17.3966L17 23.1908L24.7208 17.3966V28.3333H29.24C29.751 28.3333 30.241 28.1303 30.6023 27.769C30.9637 27.4077 31.1667 26.9176 31.1667 26.4066V9.98747C31.1933 9.43917 31.06 8.89494 30.7831 8.42095C30.5062 7.94696 30.0975 7.56362 29.6069 7.31752C29.1162 7.07143 28.5645 6.97317 28.0191 7.03471C27.4736 7.09624 26.9577 7.31491 26.5342 7.66414Z"/>
                    </svg>
                </a>
            </div>
            {/* divider svg */}
            <svg width="3" height="23" viewBox="0 0 3 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path style={{fill:borderTextAndSvgColor}} d="M-5.25713e-05 22.56V4.29153e-05H2.59195V22.56H-5.25713e-05Z"/>
            </svg>

            <a href="http://">
                {/* github icon svg */}
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path style={{fill:borderTextAndSvgColor}} d="M17 2.83337C15.1396 2.83337 13.2975 3.19981 11.5787 3.91175C9.85991 4.62369 8.29819 5.6672 6.98269 6.98269C4.32593 9.63946 2.83337 13.2428 2.83337 17C2.83337 23.2617 6.89921 28.5742 12.5234 30.4584C13.2317 30.5717 13.4584 30.1325 13.4584 29.75V27.3559C9.53421 28.2059 8.69837 25.4575 8.69837 25.4575C8.04671 23.8142 7.12587 23.375 7.12587 23.375C5.83671 22.4967 7.22504 22.525 7.22504 22.525C8.64171 22.6242 9.39254 23.9842 9.39254 23.9842C10.625 26.1375 12.7075 25.5 13.515 25.16C13.6425 24.2392 14.0109 23.6159 14.4075 23.2617C11.2625 22.9075 7.96171 21.6892 7.96171 16.2917C7.96171 14.7192 8.50004 13.4584 9.42087 12.4525C9.27921 12.0984 8.78337 10.625 9.56254 8.71254C9.56254 8.71254 10.7525 8.33004 13.4584 10.1575C14.5775 9.84587 15.7959 9.69004 17 9.69004C18.2042 9.69004 19.4225 9.84587 20.5417 10.1575C23.2475 8.33004 24.4375 8.71254 24.4375 8.71254C25.2167 10.625 24.7209 12.0984 24.5792 12.4525C25.5 13.4584 26.0384 14.7192 26.0384 16.2917C26.0384 21.7034 22.7234 22.8934 19.5642 23.2475C20.0742 23.6867 20.5417 24.5509 20.5417 25.8684V29.75C20.5417 30.1325 20.7684 30.5859 21.4909 30.4584C27.115 28.56 31.1667 23.2617 31.1667 17C31.1667 15.1396 30.8003 13.2975 30.0883 11.5787C29.3764 9.85991 28.3329 8.29819 27.0174 6.98269C25.7019 5.6672 24.1402 4.62369 22.4214 3.91175C20.7026 3.19981 18.8604 2.83337 17 2.83337Z"/>
                </svg>
            </a>

            
            {/* divider svg */}
            <svg width="3" height="23" viewBox="0 0 3 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path style={{fill:borderTextAndSvgColor}} d="M-5.25713e-05 22.56V4.29153e-05H2.59195V22.56H-5.25713e-05Z"/>
            </svg>
            
            <a href="http://">
                {/* linkedin icon svg */}
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path style={{fill:borderTextAndSvgColor}} d="M26.9167 4.25C27.6681 4.25 28.3888 4.54851 28.9201 5.07986C29.4515 5.61122 29.75 6.33189 29.75 7.08333V26.9167C29.75 27.6681 29.4515 28.3888 28.9201 28.9201C28.3888 29.4515 27.6681 29.75 26.9167 29.75H7.08333C6.33189 29.75 5.61122 29.4515 5.07986 28.9201C4.54851 28.3888 4.25 27.6681 4.25 26.9167V7.08333C4.25 6.33189 4.54851 5.61122 5.07986 5.07986C5.61122 4.54851 6.33189 4.25 7.08333 4.25H26.9167ZM26.2083 26.2083V18.7C26.2083 17.4751 25.7218 16.3005 24.8557 15.4343C23.9895 14.5682 22.8149 14.0817 21.59 14.0817C20.3858 14.0817 18.9833 14.8183 18.3033 15.9233V14.3508H14.3508V26.2083H18.3033V19.2242C18.3033 18.1333 19.1817 17.2408 20.2725 17.2408C20.7985 17.2408 21.303 17.4498 21.6749 17.8217C22.0469 18.1937 22.2558 18.6982 22.2558 19.2242V26.2083H26.2083ZM9.74667 12.1267C10.3779 12.1267 10.9832 11.8759 11.4296 11.4296C11.8759 10.9832 12.1267 10.3779 12.1267 9.74667C12.1267 8.42917 11.0642 7.3525 9.74667 7.3525C9.11169 7.3525 8.50273 7.60474 8.05373 8.05373C7.60474 8.50273 7.3525 9.11169 7.3525 9.74667C7.3525 11.0642 8.42917 12.1267 9.74667 12.1267ZM11.7158 26.2083V14.3508H7.79167V26.2083H11.7158Z"/>
                </svg>
            </a>
        </div>
    );
}