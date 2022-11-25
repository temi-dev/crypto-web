import { useEffect, useState } from 'react'
import { formatDate } from '../../shared/services/app/app.service'

const DateFormatElement = ({ date, format }: { date: string, format?: string }) => {
    const [formattedDate, setFormattedDate] = useState('')
    
    const setDate = async() =>{
        const newDate = await formatDate(date, format)
        setFormattedDate(newDate)
    }
    useEffect(() =>{
        setDate()
    }, [])
    return (
        <span>{formattedDate}</span>
    )
}

export default DateFormatElement;