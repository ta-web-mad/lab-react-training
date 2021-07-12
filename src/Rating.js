const ratings = {
    start_a: 0,
    start_b: 1.49,
    start_c: 1.5,
    start_d: 3,
    start_e: 4
};

// numero de estrellas totales
const starTotal = 5;

const Raiting = () => {


    return
    for (const rating in ratings) {
        const starPercentage = (ratings[rating] / starTotal) * 100;
        const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;
    }


}


export default Random
