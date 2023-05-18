import React, { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    slug?: string;
}

const Header = ({ slug }: Props) => {
    const [scrolled, setScrolled] = useState(false);

    // Change Headernav background on scroll
    const [burgerStatus, setBurgerStatus] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    return (
        <header className={`min-h-[10vh] fixed flex items-center justify-between py-0 px-10 top-0 left-0 right-0 z-50
    ${scrolled ? "bg-white/50 transition ease-in shadow-md  " : null} `}>
            <Link href={"/"}>
                {slug === "model-3" || slug === "model-y" || slug === "powerwall" ? (
                    <Image
                        src="/assets/logo-white.svg"
                        width={120}
                        height={16}
                        alt="header poster"
                        className='w-28 h-4'
                    />
                ) : (
                    <Image
                        src={"/assets/logo.svg"}
                        alt="bg header"
                        className='w-28 h-4'
                        width={120}
                        height={16}
                    />
                )}
            </Link>
            <div className={`hidden md:inline-flex items-center justify-center flex-1 space-x-4 text-md font-medium ${slug === "model-3" || slug === "model-y" || slug === "powerwall"
                ? "text-white"
                : "text-black"
                }`}>
                <Link href="/product/model-s" className={`py-0 px-2 flex-nowrap`}>
                    Model S
                </Link>
                <Link href="/product/model-3" className="py-0 px-2 flex-nowrap">
                    Model 3
                </Link>
                <Link href="/product/model-x" className="py-0 px-2 flex-nowrap">
                    Model X
                </Link>
                <Link href="/product/model-y" className="py-0 px-2 flex-nowrap">
                    Model Y
                </Link>
                <Link href="/product/powerwall" className="py-0 px-2 flex-nowrap">
                    Powerwall
                </Link>
                <Link href="/product/charging" className="py-0 px-2 flex-nowrap">
                    Charging
                </Link>
            </div>
            <div className='flex items-center space-x-4 text-md font-medium'>
                <Link className='flex mr-2' href={"#"}>
                    Support
                </Link>
                <Link className='flex mr-2' href={"#"}>
                    Shop
                </Link>
                <Link className='flex mr-2' href={"#"}>
                    Account
                </Link>
                <MenuIcon
                    className='cursor-pointer'
                    onClick={() => setBurgerStatus(true)}
                />
            </div>
            <div className={`fixed top-0 bottom-0 right-0 bg-white w-[300px] border-1 list-none px-10 py-5 flex flex-col text-start transform transition-all duration-200 space-y-5 ${burgerStatus ? "translate-x-0" : "translate-x-full"
                }`}>
                <div className='flex justify-end'>
                    <CloseIcon
                        className='cursor-pointer'
                        onClick={() => setBurgerStatus(false)}
                    />
                </div>
                <li>
                    <a href="#">Existing Inventory</a>
                </li>
                <li>
                    <a href="#">Used Inventory</a>
                </li>
                <li>
                    <a href="#">Trade-In</a>
                </li>
                <li>
                    <a href="#">Test Drive</a>
                </li>
                <li>
                    <a href="#">Company Cars</a>
                </li>
                <li>
                    <a href="#">Cybertruck</a>
                </li>
                <li>
                    <a href="#">Roadster</a>
                </li>
                <li>
                    <a href="#">Semi</a>
                </li>
                <li>
                    <a href="#">Commercial Energy</a>
                </li>
                <li>
                    <a href="#">Utilities</a>
                </li>
                <li>
                    <a href="#">Charging</a>
                </li>
                <li>
                    <a href="#">Find Us</a>
                </li>
                <li>
                    <a href="#">Events</a>
                </li>
                <li>
                    <a href="#">Support</a>
                </li>
                <li>
                    <a href="#">Investor Relations</a>
                </li>
            </div>
        </header>
    )
}

export default Header;