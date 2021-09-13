import React from 'react'
import {Container} from 'react-bootstrap'

const Categories = () => {
    return (
        <Container>
            <div className='categories'>
            <span>ALL</span>
             <span>ELECTRONICS</span>
             <span>JEWELERY</span>
             <span>MEN'S</span>
             <span>WOMEN'S</span>
            </div>
            <hr className='categories-hr'/>
        </Container>
    )
}

export default Categories
