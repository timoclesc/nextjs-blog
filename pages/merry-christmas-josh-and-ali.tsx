import Head from 'next/head';
import AppContainer from 'components/app-container';
import utilStyles from 'components/utils.module.scss';
import Santa from 'components/santa';

const XmasJoshAndAli: React.FunctionComponent = function () {
    return <AppContainer home={false} background={'red'}>
        <Head>
            <title>It's Chrimas! | timocles.com</title>
        </Head>
        <h1 className={utilStyles.headingLg}>Merry Christmas Ali and Josh!</h1>
        <p>It's that lovely time of the year where we get to be reminded of how lucky we are to have such weird family members, amongst eating way too many calories and being subjected to the onslaught of consumerism.</p>
        <p>Thank you for being the weirdos in my family.</p>
        <Santa />
        <p>So what's your gift? WELL...</p>
        <p>It's time to pack your dancing shoes and get ready to sweat. It's time to inject your week with a dose of cardio at <a href="https://lestep.com.au/" target="_blank" referrerPolicy="no-referrer">Le Step</a>.</p>
        <p>You've both got a Beginner Pass with 6 lessons, so love it or hate it, give it a go, and enjoy tomorrow coming today. </p>
       
    </AppContainer>
}

export default XmasJoshAndAli;
