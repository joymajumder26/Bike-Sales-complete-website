import React from 'react';
import Delete from '../../../images/delete.png'

const BookListDetails = ({ BookListDetails }) => {
    console.log(BookListDetails);
    // const [bookDelete,setBookDelete] = React.useState(1);

    const handleDelete = id => {
        const process = window.confirm("Are You Sure,You want To Removed");
        if (process) {
            //load data
            const url = `https://obscure-ocean-60599.herokuapp.com/addBooking/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Order successfully removed');

                    }
                    console.log(data);

                })

        }
    }
    return (
        // show booking details data
        <div class="row justify-content-between m-5">
            <div className="col-md-8 col-sm-4">
                <h4 className="text-danger">{BookListDetails.title}</h4>
                <p className="fw-lighter">{BookListDetails.description}</p>
                <h5>Price: ${BookListDetails.price}</h5>
            </div>
            <div className="col-md-4">
                <p className="btn btn-danger">Status: {BookListDetails.status}</p>
                <div ><img style={{ cursor: 'pointer'  }} src={Delete}
                    onClick={() => handleDelete(BookListDetails._id)}
                    alt="" width="35px" class="m-2" /></div>
            </div>


        </div>
    );
};

export default BookListDetails;