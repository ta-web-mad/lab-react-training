import emptyStar from './emptyStar.png'
import fullStar from './fullStar.png'

const Rating = (props) => {

        const printTimes = []

        const rate = Math.round(props.children)


        for (let i = 0; i < rate; i++) {
                printTimes.push(<img src={fullStar} style={{ width: '8%' }} alt="full star" />)
        }

        for (let i = rate; i < 5; i++) {
                printTimes.push(<img src={emptyStar} style={{ width: '8%' }} alt="empty star" />)
        }



        return (

                <div>
                        {printTimes}
                </div>
        )


}

export default Rating;