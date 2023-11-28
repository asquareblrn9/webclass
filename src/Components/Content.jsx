import React from 'react'
import { Container } from 'react-bootstrap'

const Content = (bookDetails) => {
    const {img, name, price, children} = bookDetails
  return (
    <div>
      <Container className='py-5'>
        <img src={img} width={200} alt='something' className='img-fluid' />
        <h3>Book Name: <span className='text-danger'>{name}</span></h3>
        {children}
        <h3>Price: <span className='text-danger'>{price}</span></h3>
        
      </Container>
    </div>
  )
}

export default Content
