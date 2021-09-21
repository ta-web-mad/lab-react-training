import React from 'react'
import './IdCard.styled'
import { IdCardContainer } from './IdCard.styled'

export default function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    return (
        <IdCardContainer>
            <img src={picture} alt="Presentation card" />
            <div>
                <h4> FirsName : {firstName}</h4>
                <h4> LastName : {lastName}</h4>
                <h4> Gender :{gender}</h4>
                <h4> Height : {height}</h4>
                <h4> Birth :{birth}</h4>
            </div>
        </IdCardContainer>
    )
}
