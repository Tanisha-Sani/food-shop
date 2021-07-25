import React, { useState } from 'react';
import Card from './Card';

interface IContact{
    name: string;
    email: string;
}
const Cards = () => {
    const [card, setCard] = useState<IContact>({
        name: "",
        email: ""
    });
    const [contactList, setContactList] = useState<IContact[]>([])

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
    
    const handleRemove = (email: string) => {
        const newContactList = contactList.filter(c => c.email !== email)
        setContactList(newContactList)
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
                contactList.map((contact) => <Card key={contact.name} name={contact.name} email={contact.email} handleRemove={handleRemove}  />)
            }
        </div>
    );
};

export default Cards;