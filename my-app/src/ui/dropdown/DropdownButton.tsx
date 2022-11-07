import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'

import './DropdownButton.scss'

export interface IDropDownProps {
  className?: string
  children?: React.ReactNode
  isOpen?: boolean
}

const Dropdown: React.FC<IDropDownProps> = ({
  className,
  children,
  isOpen,
}) => {
  const nodeRef = useRef(null)
  return (
    <CSSTransition
      className={className}
      in={isOpen}
      nodeRef={nodeRef}
      timeout={200}
      unmountOnExit
    >
      <div ref={nodeRef}>
        <div className={classNames('DropDown')}>{children}</div>
      </div>
    </CSSTransition>
  )
}

export default Dropdown
