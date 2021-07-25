import React from 'react';

interface IProps{
    name: string;
    email: string;
    handleRemove: (email: string) => void
}

const Card = ({name, email, handleRemove} : IProps) => {
    return (
        <div>
               <p>
                <strong>Name:</strong> {name}
            </p>
            <p>
                <strong>Email:</strong> {email}
            </p>
            <button onClick={() => handleRemove(email)}>Remove</button> 
        </div>
    );
};

export default Card;