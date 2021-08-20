import classnames from 'classnames'
import styles from './alert.module.css'

export default function Alert ({type, children}) {
    const classes = classnames({
        [styles.alert]: true,
        [styles.error]: type === 'error',
        [styles.warning]: type === 'warning'
    });

    return (<div className={classes}>
        <h3 className={styles.heading}>Alert!</h3>
        {children}
    </div>)
}