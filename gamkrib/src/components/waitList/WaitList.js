import React from 'react'
import { Banner } from '../home/LandingPage'


export const WaitList = () => {
    return (
        <>
            <Banner search={WaitInput} />

        </>
    )
}


const WaitInput = () => {


    return <div style={{ backgroundColor: 'blue', height: '500px' }}> <input type='text' />
    </div>

}