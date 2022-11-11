import { parseISO, format } from 'date-fns'
import utilStyles from '../utils.module.scss'
import classnames from 'classnames'


export default function Date( { dateString, additionalClasses }: { dateString: string, additionalClasses?: string}) {
    const date = parseISO(dateString);
    const classes = classnames(utilStyles.lightText, additionalClasses);

    return <time className={classes} dateTime={dateString}>{date && format(date, 'LLLL d, yyyy')}</time>
}