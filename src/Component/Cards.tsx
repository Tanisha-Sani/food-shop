import React, { useState } from 'react';
import Card from './Card';

interface IProduct{
    name: string;
    email: string;
}
const Cards = () => {
    const [card, setCard] = useState<IProduct>({
        name: "",
        email: ""
    });
    const [contactList, setContactList] = useState<IProduct[]>([])

    const onClick = () => {
        setContactList([...contactList, card])
        setCard({
            name: "",
            email: ""
        })
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>  {
        setCard({ ...card, [e.target.name]:  e.target.value})
    }

    return (
        <div>
            <h1>Welcome, to our Food Shop</h1>
            <div className="form">
                <input 
                    value={card.name}
                    onChange={onChange}
                    name="name"
                    placeholder="User Name"
                    type="text" 
                />
                 <input 
                    value={card.email}
                    onChange={onChange}
                    name="email"
                    placeholder="User Email"
                    type="email" 
                />
                <button onClick={onClick}>Add</button>
            </div>
            {
                contactList.map((contact) => <Card key={contact.name} name={contact.name} email={contact.email}  />)
            }
        </div>
    );
};

export default Cards;