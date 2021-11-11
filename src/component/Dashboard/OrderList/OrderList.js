import React, { useState } from 'react';
import OrderListDetails from '../OrderListDetails/OrderListDetails';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    const [orderList, setOrderList] = useState([])
    React.useEffect(() => {
        //load data
        fetch("https://obscure-ocean-60599.herokuapp.com/getBooking")
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [])
   
    return (
        <section className="container-fluid row">
            {/* show sidebar */}
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <table class="table table-hover  table-borderless table-striped ">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Bike</th>
                            <th scope="col">Card Number</th>
                            <th scope="col">Order Time</th>
                            <th scope="col">Status</th>
                            <th scope="col">Update Status</th>
                            
                        </tr>
                    </thead>
                    {/* maping data */}
                    {
                        orderList.map(list => <OrderListDetails list={list} />)
                    }
                </table>


            </div>
        </section>
    );
};

export default OrderList;