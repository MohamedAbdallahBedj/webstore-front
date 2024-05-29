import React from 'react'
import Login from '../../components/Login/Login'
import Signup from '../../components/Signup/Signup'

const Auth = () => {
    const [state, setState] = React.useState('login')
    return (
        <main className='flex justify-center gap-10'>
            {state === 'login' ? <Login setState={setState} /> : <Signup setState={setState} />}
        </main>
    )
}

export default Auth