import Head from 'next/head';
import AppContainer from 'components/app-container';
import utilStyles from 'components/utils.module.scss';
import Santa from 'components/santa';

const XmasJoshAndAli: React.FunctionComponent = function () {
    return <AppContainer home={false} background={'red'}>
        <Head>
            <title>It's Chrimas! | timocles.com</title>
        </Head>
        <h1 className={utilStyles.headingXl}>Merry Christmas Max!</h1>
        <p>It's pretty easy to see why we're such a good match. You're overpowering Christmas / Daddy / Naughty Elf vibes are the yin to my grinchy yang.</p>
        <Santa />
        <p>Your gift this year is an experience.</p>
        <p>One that I've sure you've had before, but we're going to be doing a whisky tasting in Fitzroy. Keep the evening of February 27th free! </p>
        <p>Merry Christmas and I love you.</p>
       
    </AppContainer>
}

export default XmasJoshAndAli;
