import React from 'react';


const OrderListDetails = ({ list }) => {

   
    return (


// show orderlistdetails
        <tbody >
            <tr id="delete">
                <td>{list.displayName}</td>
                <td>{list.email}</td>
                <td>{list.title}</td>
                <td>{list.payment}</td>
                <td>{list.orderTime}</td>
                <td>{list.status}</td>
                <td>
                <p data-toggle="modal" data-target="#staticBackdrop" ><i class="fas fa-edit ml-5"></i></p>
                
                </td>
                {/* use modal for update status */}
                <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Update Status</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Status</label>
                                    <select class="form-control" id="exampleFormControlSelect1" >
                                        <option>Pending</option>
                                        <option>OnGoing</option>
                                        <option>Approve</option>
                                    </select>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" data-dismiss="modal">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </tr>
        </tbody>
    );
};

export default OrderListDetails;