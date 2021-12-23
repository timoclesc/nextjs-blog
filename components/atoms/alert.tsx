import classnames from 'classnames'
import styles from './alert.module.scss'
import utilStyles from 'components/utils.module.scss'
import React from 'react';

export default function Alert ({type, children}: {type: String, children: React.ReactChild}) {
    const classes = classnames({
        [styles.alert]: true,
        [styles.error]: type === 'error',
        [styles.warning]: type === 'warning'
    },
    styles[type.toLowerCase()]
    );

    const textClasses = classnames(
        styles.heading,
        utilStyles.marginBottomX0,
    );

    return (<div className={classes} aria-live="polite">
        <p className={textClasses}>{children}</p>
    </div>)
}