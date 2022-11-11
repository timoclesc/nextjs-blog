import Head from 'next/head'
import NextLink from 'next/link'
import Image from 'next/image'
import styles from './layout.module.scss'
import utilStyles from './utils.module.scss'
import Logo from './atoms/logo'
import { BASE_COLOURS } from '../lib/constants'
import { Github, Linkedin } from '@geist-ui/react-icons'
import { Link, Spacer } from '@geist-ui/react'

const name = "Timocles"
const accentColor = BASE_COLOURS.plum;
export const siteTitle = "Timocles' Playground"


export default function Layout({children, home}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                name="description"
                content="Learn how to build a personal website using Next.js"
                />
                <meta
                property="og:image"
                content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        {/* <Image 
                            priority
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                        /> */}
                        <h1 className={utilStyles.heading2Xl}>
                            <Logo mainColor="black" accentColor={accentColor} />
                            {name}
                        </h1>
                    </>
                ) : (
                    <>
                        <NextLink href="/">
                            <a>
                                <Image
                                    priority
                                    className={utilStyles.borderCircle}
                                    src="/images/profile.jpg"
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                            </a>
                        </NextLink>
                    </>
                )}
            </header>
            <main>{children}</main>  
            {!home && (
                <div className={styles.backToHome}>
                    <NextLink href="/">
                        <a>← Back to Home</a>
                    </NextLink>
                </div>
            )}
            <footer className={styles.footer}>
                <Link href="https://github.com/timoclesc">
                    <Github color={accentColor} size={32}/>  
                </Link>
                <Spacer h={.5} />
                <Link href="https://www.linkedin.com/in/timocles-copland-262648b4">
                    <Linkedin color={accentColor} size={32}/>  
                </Link>
            </footer>
        </div>
    )
}