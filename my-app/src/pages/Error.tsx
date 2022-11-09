import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 65px;
  background-color: white;
`

const Error = () => (
  <ErrorWrapper>
    <h2>Nothing to see here</h2>
    <Link to="/">Go to the home page</Link>
  </ErrorWrapper>
)

export default Error
