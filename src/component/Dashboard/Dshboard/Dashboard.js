import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <section className="container-fluid row">
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <main>

                    <h2 class="dash-title">Overview</h2>

                    <div class="dash-cards">
                        <div class="card-single">
                            <div class="card-body">

                                <div>
                                    <h5 className="text-danger">Tomorrow(Booked)</h5>
                                    <h4>13</h4>

                                </div>
                            </div>

                        </div>

                        <div class="card-single">
                            <div class="card-body">

                                <div>
                                    <h5 className="text-danger">Yesterday</h5>
                                    <h4>11</h4>

                                </div>
                            </div>

                        </div>

                        <div class="card-single">
                            <div class="card-body">

                                <div>
                                    <h5 className="text-danger">Today</h5>
                                    <h4>8</h4>

                                </div>
                            </div>

                        </div>

                        <div class="card-single">
                            <div class="card-body">

                                <div>
                                    <h5 className="text-danger">Total Booked</h5>
                                    <h4>190</h4>

                                </div>
                            </div>

                        </div>



                    </div>

                </main>
            </div>
        </section>
    );
};

export default Dashboard;