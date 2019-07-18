import format from 'date-fns/format'

const formatDate = (date: Date) => `${format(date, 'DD MMMM YYYY')}`

export default formatDate
