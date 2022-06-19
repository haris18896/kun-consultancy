/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { useAmp } from 'next/amp'

function Header() {
  const isAmp = useAmp()

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const logout = () => {
    handleClose()
  }

  return <div className='Header'></div>
}

export default Header
