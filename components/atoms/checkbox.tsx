import classnames from 'classnames'
import styles from './checkbox.module.scss'

export default function Checkbox ({label, value, onChange, isChecked}: {label: string, value: string, onChange: React.ChangeEventHandler<HTMLInputElement>, isChecked: boolean}) {

    return (<div className={styles.wrapper} key={value}>
        <input id={value} name={value} type="checkbox" checked={isChecked} onChange={onChange} className={styles.checkbox}/>
        <label htmlFor={value}>{label}</label>
    </div>)
}