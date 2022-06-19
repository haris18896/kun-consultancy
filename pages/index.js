/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { useAmp } from 'next/amp'
import { useRouter } from 'next/router'

import Layout from '../components/Layout'

function Connect() {
  const isAmp = useAmp()
  const router = useRouter()

  return (
    <Layout title='FriendsVPN Extension'>
      <div className='Home'>This is Home Page</div>
    </Layout>
  )
}

export default Connect
