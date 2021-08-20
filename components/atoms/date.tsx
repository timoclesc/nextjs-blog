import { parseISO, format } from 'date-fns'

export default function Date({ dateString, classes }: { dateString: string, classes: string}) {
    const date = parseISO(dateString);

    return <time className={classes} dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}