const currentYear = new Date().getFullYear()

const Q1 = {label: `Q1${currentYear}`, start: new Date(currentYear, 0, 1), end: new Date(currentYear, 2, 31)}
const Q2 = {label: `Q2${currentYear}`, start: new Date(currentYear, 3, 1), end: new Date(currentYear, 5, 30)}
const Q3 = {label: `Q3${currentYear}`, start: new Date(currentYear, 6, 1), end: new Date(currentYear, 8, 30)}
const Q4 = {label: `Q4${currentYear}`, start: new Date(currentYear, 9, 1), end: new Date(currentYear, 11, 31)}

const quarters = [Q1, Q2, Q3, Q4]

function getCurrentQuarter(){

  const today = Date.now()

  const result = quarters.find((value) => (
    (value.start <= today) && (today <= value.end)
  ))

  console.log(result)

  return result
}

export default getCurrentQuarter
