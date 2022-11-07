import React, { useEffect, useState, useRef } from 'react'
import Dropdown from '../../ui/dropdown/DropdownButton'

import './Header.scss'

const Header: React.FC = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  /////////////кликание по любой обсласти страницы
  useEffect(() => {
    window.addEventListener('click', handleClickOutsideDropdown)
    return () => {
      window.removeEventListener('click', handleClickOutsideDropdown) ////////необходимо для очищение оперативной памяти
    }
  })

  const handleToggleDropdown = () => {
    setIsDropDownOpen((prevState) => !prevState)
  }
  const refToggleDropdown = useRef<any>(null)

  const handleClickOutsideDropdown = (event: MouseEvent) => {
    if (isDropDownOpen) {
      if (refToggleDropdown.current) {
        if (!refToggleDropdown.current.contains(event.target)) {
          setIsDropDownOpen(false)
        }
      }
    }
  }
  return (
    <nav className="header-container">
      <div className="header-logo">
        <h1 className="header-title">StatEnergy</h1>
      </div>
      <ul className="header-menu">
        <li
          className="header-menu-item"
          ref={refToggleDropdown}
          onClick={handleToggleDropdown}
        >
          <span className="title-dropDown">User</span>
          <Dropdown className="dropDownCatalog" isOpen={isDropDownOpen}>
            <ul className="dropDownCatalog-menu">
              <li className="dropDownCatalog-menu-item">Profile</li>
              <li className="dropDownCatalog-menu-item">Logout</li>
            </ul>
          </Dropdown>
        </li>
      </ul>
    </nav>
  )
}

export default Header
