'use client'

import cpp from '@/assets/images/icons/cpp.svg'
import python from '@/assets/images/icons/python.svg'
import typescript from '@/assets/images/icons/typescript.svg'
import javascript from '@/assets/images/icons/javascript.svg'
import nodejs from '@/assets/images/icons/nodejs.svg'
import express from '@/assets/images/icons/express.svg'
import django from '@/assets/images/icons/django.svg'
import reactNative from '@/assets/images/icons/react.svg'
import mysql from '@/assets/images/icons/mysql.svg'
import mongodb from '@/assets/images/icons/mongodb.svg'
import linux from '@/assets/images/icons/linux.svg'
import docker from '@/assets/images/icons/docker.svg'
import git from '@/assets/images/icons/git.svg'
import github from '@/assets/images/icons/github.svg'
import figma from '@/assets/images/icons/figma.svg'
import rightaArrowPix from '@/assets/images/icons/rightArrowPix.svg'

import Image from 'next/image'

import style from '@/styles/components/techStackComp.module.css'
import { useEffect, useState } from 'react'

type techStack = {
    programmingLangs: [string,any][],
    backends: [string,any][],
    databases: [string,any][],
    devOpsAndOther: [string,any][],
    uiUx: [string,any][],
}

export default function TechStack() {

    const techStack: [string,[string,any][]][] = [
        ['Programming Languages',[['C/C++',cpp],['Python',python],['Typescript',typescript],['JavaScript',javascript]]],
        ['Backends', [['Node.js',nodejs],['Express.js',express],['Django',django],['React Native',reactNative]]],
        ['Databases', [['MySQL',mysql],['Mongodb',mongodb]]],
        ['DevOps & Tools', [['Linux',linux],['Docker',docker],['Docker Compose',docker],['Git',git],['Github',github]]],
        ['UI/UX', [['Figma',figma]]]
    ]


    const content = techStack.map((contentBar) => (
        <div className={style.wholeContentBar} key={contentBar[0]}>
            <div className={style.contentCategory}>
                {contentBar[0]}
                <Image height={34} src={rightaArrowPix} alt=''/>
            </div>
            {contentBar[1].map(dataBlock => (
                <div className={style.contentBlock} key={dataBlock[0]}>
                    {dataBlock[0]}
                    <Image height={34} src={dataBlock[1]} alt=''/>
                </div>
            ))}
        </div>
    ))

  return (
    <div className={style.contentBars}>
        {content}
    </div>
  )
}