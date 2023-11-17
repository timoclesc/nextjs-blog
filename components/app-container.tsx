import Head from 'next/head'
import styles from './app-container.module.scss'
import classnames from 'classnames'


export default function AppContainer({ children, home, background, fullWidth = false }: { children?: React.ReactChild[] | React.ReactChild, home: boolean, background?: string, fullWidth?: boolean }) {
    const cn = classnames({
        [styles.container]: true,
        [styles.red]: background === 'red',
        [styles.pink]: background === 'pink',
        [styles.white]: background === 'white',
        [styles.fullWidth]: fullWidth,
    });
    return (
        <div className={cn}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content=""
                />
                <meta
                    property="og:image"
                    content=""
                />
                <meta name="og:title" content="Timocles' Playground" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <main>{children}</main>
        </div>
    )
}