import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const params = useParams()

    return (
        <div className='h-[80vh] w-screen flex items-center justify-center'>
            <h1>I am user: {params.userName}</h1>
        </div>
    );
}
 
export default User;