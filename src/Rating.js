const Rating = props =>{

    const numberFormat = Math.round(props.children);

    return(
        <div>
            {'★'.repeat(numberFormat) +  '☆'.repeat(5-numberFormat)}
        </div>
    ) 
}

export default Rating