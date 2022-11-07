import React, { useEffect } from 'react'

const Logout: React.FC = () => {
  useEffect(() => {
    const logoutFn = async () => {
      console.log('you will be logged out')
    }
    logoutFn()
  }, [])

  return <div>Logout</div>
}
export default Logout
