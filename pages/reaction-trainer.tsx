import Head from 'next/head';
import AppContainer from 'components/app-container';
import utilStyles from 'components/utils.module.scss';
import Alert from 'components/atoms/alert';
import Checkbox from 'components/atoms/checkbox';
import Input from 'components/atoms/input'
import { Button, Grid, Spacer } from '@geist-ui/react';
import { useState } from 'react';

const initialDelay = 2;
const options:string[] = ['Forward', 'Back', 'Left', 'Right', 'Yellow', 'Red', 'Blue', 'Green', 'Orange', 'Go'];
const audioPath = '/sounds/'

const ReactionTrainer: React.FunctionComponent = function () {
    const [timer, setTimer] = useState(null);
    const [isRepeat, setIsRepeat] = useState(false);
    const [minDelay, setMinDelay] = useState(initialDelay);
    const [maxDelay, setMaxDelay] = useState(initialDelay * 2);
    const [checkboxes, setCheckboxes] = useState(
        options.reduce(
            (options, option, index) => ({
                ...options, 
                [option]: index === 0
            }), {}
        ));
    const [choice, setChoice] = useState('Press the button...');
    var audio = null;

    function handleClick(event:  React.MouseEvent<HTMLButtonElement>) {
        timer && clearTimeout(timer); 
        triggerReaction(isRepeat);
    }

    function handleRepeat() {
        const currentRepeat = isRepeat;
        setIsRepeat(!currentRepeat);

        if (currentRepeat) {
            clearTimeout(timer);
        } else {
            triggerReaction(!currentRepeat);
        }
    }

    function triggerReaction(repeat: boolean) {
        const delay = Math.floor((Math.random() * (maxDelay - minDelay) + minDelay) * 1000);
        const possibleOptions = getSelectedOptions();
        const index = Math.floor(Math.random() * possibleOptions.length);
        const selectedChoice = possibleOptions[index];
        audio = new Audio(`${audioPath}${selectedChoice.toLowerCase()}.mp3`);
        
        setTimer(() => setTimeout(
            () => {
                setChoice(selectedChoice);
                audio.play();
                setTimer(null);
                repeat && triggerReaction(repeat);
            }, delay
        ));
    }

    function getSelectedOptions(): string[] {
        return options.reduce((acc, val) => {
            if(checkboxes[val]) acc.push(val);
            return acc
        }, []);
    }

    function handleMinInput( event: React.ChangeEvent<HTMLInputElement>) {
        setMinDelay(parseInt(event.target.value, 10));
    }

    function handleMaxInput( event: React.ChangeEvent<HTMLInputElement>) {
        setMaxDelay(parseInt(event.target.value, 10));
    }

    function handleCheckboxChange( event: React.ChangeEvent<HTMLInputElement>) {
        const { name } = event.target;

        setCheckboxes(prevState => ({
                ...prevState,
                [name]: !prevState[name]
            }
        ));
    }

    return <AppContainer home={false}>
        <Head>
            <title>Reaction Trainer| timocles.com</title>
        </Head>
        <h1 className={utilStyles.headingLg}>Reaction Trainer</h1>
        {choice && <Alert type={choice}>{choice}</Alert>}
        <Grid.Container gap={1}>
            <Grid xs={24} sm={12} width="100%">
                <Input label={"Min"} onChange={handleMinInput} value={minDelay.toString()} type="number"/>
            </Grid>
            <Grid xs={24} sm={12} width="100%">
                <Input label={"Max"} onChange={handleMaxInput} value={maxDelay.toString()} type="number"/>
            </Grid>
        </Grid.Container>
        <Spacer h={.5} />
        <div className={utilStyles.flexList}>
            {options.map(
                option => (<Checkbox value={option} label={option} isChecked={checkboxes[option]} onChange={handleCheckboxChange} key={option} /> )
            )}
        </div>
        <div className={utilStyles.marginBottomX1}>
        <Grid.Container gap={1}>
            <Grid>
                <Button auto scale={2} onClick={handleClick} disabled={getSelectedOptions().length === 0 } className={utilStyles.focus}>Send it!</Button>
            </Grid>
            <Grid>
                <Button auto scale={2} onClick={handleRepeat} disabled={getSelectedOptions().length === 0 } className={utilStyles.focus}>{isRepeat ? 'Stop' : 'Start'} Repeat</Button>
            </Grid>
        </Grid.Container>
        </div>
        <Spacer h={1} />
        <div>
            <h3>Instructions</h3>
            <p>This is a handy tool to introduce a reactive element to footwork drills.</p>
            <p>Use the checkboxes to a create a pool of options, then select the min and max time interval you'd like for a delay.</p>
            <p>Click the <em>Send It!</em> button and a random option will be selected, displayed on screen, and spoken to you for an auditory queue.</p>
            <p>If you want this to be automatically repeated, click the <em>Start Repeat</em> button to have the queue fired over and over. Click it again to stop the repeat.</p>
        </div>
    </AppContainer>
}

export default ReactionTrainer