import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// const ErrorWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `

const Error = () => (
  <div>
    <h2>Nothing to see here</h2>
    <Link to="/">Go to the home page</Link>
  </div>
)

export default Error
