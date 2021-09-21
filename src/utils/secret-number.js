
const secretNumber = (number) => {
    const hideNum = []

    for (let i = 0; i < number.length; i++) {
        i < number.length - 4 ? hideNum.push('*') : hideNum.push(number[i])
    }
    return hideNum.join('')
}

export default secretNumber