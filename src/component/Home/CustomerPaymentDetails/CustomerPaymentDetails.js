import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import { UserContext } from '../../../App';



const CustomerPaymentDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    const [service, setService] = useState([])
    console.log(service);
    const [info, setInfo] = React.useState({});
    const { id } = useParams()
    
    React.useEffect(() => {
        //load data
        fetch(`https://obscure-ocean-60599.herokuapp.com/service/${id}`)
            .then((res) => res.json())
            .then((data) => {
               
                setService(data)
            });
    }, [id]);

    const handleBlur = e => {
        const newInfo = { ...info };
        console.log(e.target.name, e.target.value);
        newInfo[e.target.name] = e.target.value;
       
    }
    const [payment, setPayment] = useState()
    
    const handlePayment = e =>{
        console.log(e.target.value);
        setPayment(e.target.value)

    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data,e) => {
        const newInformation = { ...service, ...loggedInUser }
       
        const serviceData = {
            ...loggedInUser,
            title: service.title,
            price: service.price,
            payment:payment,
            description: service.description,
            status: "Pending",
            orderTime: new Date()
        }
        console.log(serviceData);
        fetch('https://obscure-ocean-60599.herokuapp.com/addBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(serviceData)
        })
            .then(res => res.json())
            .then((data) => {
                if (data) {
                    console.log("database data ", data);
                    alert('your order placed successfully')
                    history.push('/home')
                }

            })

        history.push('/home')

    };

  
    return (
        <section className="container-fluid row">
            {/* show sidebar */}
            <Sidebar />

            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                {/* input customer payment details */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input class="form-control" onBlur={handleBlur} type="text" className="form-control" name="displayName" value={loggedInUser.displayName}/>
                    </div>
                    <div className="form-group">
                        <input class="form-control" onBlur={handleBlur} type="text" className="form-control" value={loggedInUser.email} name="email" />
                    </div>

                    <div className="form-group">
                        <input class="form-control" onBlur={handleBlur} type="text" className="form-control" value={service.title} name="title" />
                    </div>
                    <h5>Your Charge Will Be {service.price} $</h5>
                    <div className="form-group">
                        <input class="form-control" onChange={handlePayment} type="text" placeholder="payment card" className="form-control"  name="payment" />
                    </div>

                    <br />
                    <input type="submit" />


                </form>


            </div>
        </section >
    );
};

export default CustomerPaymentDetails;