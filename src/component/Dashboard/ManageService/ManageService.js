import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Delete from '../../../images/delete.png'

const ManageService = () => {
    const [serviceList, setServiceList] = React.useState([])
    const [render, setRender] = React.useState(1);
    React.useEffect(() => {
        fetch("https://obscure-ocean-60599.herokuapp.com/service")
            .then(res => res.json())
            .then(data => setServiceList(data))
    }, [render])
    // for delete data
    function deleteService(id, event) {

        const process = window.confirm("Are You Sure,You want To Removed");
        if (process) {
            //load data
            fetch(`https://obscure-ocean-60599.herokuapp.com/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    console.log("deleted successfully")
                    if (result) {
                        setRender(render + 1)
                        alert("Deleted Successfully")
                    }

                })
        }
    }
    console.log(render);
    return (
        <section className="container-fluid row">
            {/* show sidebar */}
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <table class="table table-hover  table-borderless table-striped ">
                    <thead>
                        <tr>
                            <th scope="col">Bike Title</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    {/* map data */}
                    {
                        serviceList.map(list => <tbody >
                            <tr id="delete">
                                <td className="m-5"><h5 className="text-primary">{list.title}</h5></td>
                                <td>{list.description}</td>
                                <img style={{ cursor: 'pointer' }} src={Delete} onClick={() => deleteService(list._id)} alt="" width="35px" class="m-2" />
                            </tr>
                        </tbody>)
                    }

                </table>
            </div>
        </section>
    );
};

export default ManageService;