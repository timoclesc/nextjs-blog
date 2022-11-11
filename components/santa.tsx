import styles from './santa.module.scss';

export default function Santa() {
    return (
        <div className={styles.outerWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.face}>
                    <div className={styles.hatWrapper}>
                        <div className={styles.hat}>
                            <div className={styles.hatTop}>
                            </div>
                        </div>
                        <div className={styles.hatBrim}>

                        </div>
                    </div>
                    <div className={styles.eyes}>
                        <div className={`${styles.eye} ${styles.leftEye}`}>

                        </div>
                        <div className={`${styles.eye} ${styles.rightEye}`}>

                        </div>
                    </div>
                    <div className={styles.mouth}>

                    </div>
                    <div className={styles.beard}>
                        <div className={styles.mustache}>
                            <div className={styles.mustacheLeft}>

                            </div>
                            <div className={styles.mustacheRight}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
