import Head from 'next/head'
import styles from './app-container.module.scss'
import utilStyles from './utils.module.scss'
import classnames from 'classnames'


export default function AppContainer({children, home, background}) {
    const cn = classnames( {
        [styles.container]: true,
        [styles.red]: background === 'red'
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
                <meta name="og:title" content="Reaction Traininer" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <main>{children}</main>  
        </div>
    )
}