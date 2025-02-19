import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/about')
    }

    return (
        <div>
            <h1>Welcome to the Home Page!</h1>
            <button onClick={handleNavigate}>Go to About Page</button>
        </div>
    )
}

export default Home
