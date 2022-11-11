import styles from './checkbox.module.scss'
import classNames from 'classnames'

export default function Checkmark ({value, onChange, isChecked}: {label: string, value: string, onChange: React.ChangeEventHandler<HTMLInputElement>, isChecked: boolean}) {
    const checkboxClasses = classNames(styles.checkbox, styles.checkboxLarge);

    return (<div className={styles.wrapper} key={value}>
        <input id={value} name={value} type="checkbox" checked={isChecked} onChange={onChange} className={checkboxClasses}/>
    </div>)
}