import React from 'react'
import {Link} from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

function HomePage() {
  return (
    <MainLayout>
        <div className='bg-light p-5 mt-4 rounded-3'>
            <h1>Welcome to the simple POS for small buiness</h1>
            <p>This POS IS FIRST TIME.</p>
            <Link to='/pos' className='btn btn-primary'>Click here to sell products</Link>
        </div>
    </MainLayout>
  )
}

export default HomePage