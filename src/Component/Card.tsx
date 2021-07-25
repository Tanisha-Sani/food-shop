import React from 'react';

interface IProps{
    name: string;
    email: string;
}

const Card = ({name, email} : IProps) => {
    return (
        <div>
               <p>
                <strong>Name:</strong> {name}
            </p>
            <p>
                <strong>Email:</strong> {email}
            </p>

        </div>
    );
};

export default Card;