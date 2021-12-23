import styles from './card-list.module.scss';
import { Grid } from '@geist-ui/react';

export default function CardList({children}) { 
    return (
        <Grid.Container gap={1} justify={"center"}>
            {children}
        </Grid.Container>
    )
}