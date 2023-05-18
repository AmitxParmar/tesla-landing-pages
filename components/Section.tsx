import React from 'react'
import { ExpandMore } from '@mui/icons-material'
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

type Section = {
    title: string,
    description: string,
    backgroundImg: string,
    leftBtnText: string,
    rightBtnText: string,
    id: string,
    slug: string,
}

const Section = ({
    title,
    description,
    backgroundImg,
    leftBtnText,
    rightBtnText,
    id,
    slug,
}: Section) => {
    return (
        <div className='snap-start relative flex flex-col justify-between items-center w-screen h-screen' id={id}>
            <Image
                src={`/assets/${backgroundImg}`}
                alt='names'
                className='object-cover w-screen h-screen z-10 '
                fill
            />
            <AnimatePresence>
                <motion.div
                    initial={{ y: "50%", opacity: 0, scale: 0.5 }}
                    whileInView={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    exit={{ y: "50%", opacity: 0 }}
                    viewport={{ once: false }}
                    className='text-center pt-[15vh] z-20'
                >
                    <h1 className='text-4xl font-medium'>{title}</h1>
                    <p>{description}</p>
                </motion.div>
            </AnimatePresence>
            <div className='z-20'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0 }}
                    viewport={{ once: true }}
                    className='flex flex-col md:flex-row mb-8'
                >
                    <div className='bg-gray-600 h-10 w-[250px] text-white flex items-center justify-center rounded-smopacity-85 uppercase text-sm cursor-pointer m-2'>
                        <Link href={slug}>
                            {leftBtnText}
                        </Link>
                    </div>
                    {rightBtnText && (<div className='bg-white h-10 w-[256px] text-black flex items-center justify-center rounded-sm opacity-85 uppercase text-sm cursor-pointer m-2'>{rightBtnText}</div>)}
                </motion.div>

                <div className='flex w-full items-center justify-center h-10 animate-animateDown overflow-x-hidden text-white'>
                    <ExpandMore className='w-5 h-5 !text-white'/>
                </div>
            </div>
        </div>
    )
}

export default Section