import Head from 'next/head';
import AppContainer from 'components/app-container';
import utilStyles from 'components/utils.module.scss';
import Checkmark from 'components/atoms/checkmark';
import Input from 'components/atoms/input'
import { Button, Grid, Spacer } from '@geist-ui/react';
import React, { useState } from 'react';

const people: string[] = [
    'Angus',
    'Ashley',
    'Bis',
    'Cameron',
    'Clement',
    'Cup',
    'Damon',
    'Emma',
    'Foster',
    'Hardie',
    'James',
    'Jireh',
    'John',
    'Josh',
    'Loughnan',
    'Matt',
    'Max',
    'Peter',
    'Rob',
    'Sam',
    'Timocles',
];

const MatchMe: React.FunctionComponent = function () {
    const [checkboxes, setCheckboxes] = useState(
        people.reduce(
            (people, person, index) => ({
                ...people,
                [person]: index === 0
            }), {}
        ));

    const [answers, setAnswers] = useState(people.map(() => ''));

    function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name } = event.target;

        setCheckboxes(prevState => ({
            ...prevState,
            [name]: !prevState[name]
        }
        ));
    }

    function handleAnswerChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name } = event.target;

        setCheckboxes(prevState => ({
            ...prevState,
            [name]: !prevState[name]
        }
        ));
    }

    function getScore() {
        return people.filter(person => checkboxes[person]).length;
    }

    return <AppContainer home={false}>
        <Head>
            <title>Match Me | timocles.com</title>
        </Head>
        <h1 className={utilStyles.headingLg}>Match Me</h1>
        <Grid.Container gap={1}>
            {people.map( 
                person => (
                    <React.Fragment key={person}>
                        <Grid xs={24} width="100%">
                            <Input label={person} onChange={handleAnswerChange} value={answers[person]} type="text" />
                            <Spacer h={.5} />
                            <Checkmark value={person} label={person} isChecked={checkboxes[person]} onChange={handleCheckboxChange} key={person} />
                        </Grid>
                    </React.Fragment>
                )
            )}
        </Grid.Container>
        <Spacer h={.5} />
            <h2 className={utilStyles.headingMd} style={{textAlign: 'center'}}>Final Score: {getScore()}</h2>
        <Spacer h={1} />

    </AppContainer>
}

export default MatchMe