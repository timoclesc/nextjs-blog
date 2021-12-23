import classnames from 'classnames'
import utilStyles from '../utils.module.scss'
import { Input } from '@geist-ui/react'

export default function FormInput ({type, label, value, onChange, classes}: {type: string, label: string, value: string, onChange: React.ChangeEventHandler<HTMLInputElement>, classes?: string}) {

    return (<Input htmlType={type} label={label} value={value} onChange={onChange} width="100%" className={classes}/>)
}   