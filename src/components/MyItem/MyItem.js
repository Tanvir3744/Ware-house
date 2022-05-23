import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItemCard from '../MyItemCard/MyItemCard';

const MyItem = () => {
    const [myItems, setMyItems] = useState([])

    //getting email to show my items based on email
    const [user] = useAuthState(auth)
    useEffect(() => {
        const email = user.email;
        const url = `https://peaceful-plains-32871.herokuapp.com/myItem?email=${email}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setMyItems(data));
    },[user])
    return (
            <div className="container mt-5 mb-6">
                <div className="row">
                    {
                        myItems.map(myitem => <MyItemCard key={myitem._id} myitem ={myitem}></MyItemCard>)
                    }
                </div>
            </div>
    );
};

export default MyItem;