/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useAmp } from 'next/amp'

function Footer() {
  const isAmp = useAmp()

  return <div className='Footer'></div>
}

export default Footer
