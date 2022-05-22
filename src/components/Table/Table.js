import React from 'react';

const Table = () => {
    return (
        <div>
            <h2 className='mt-2'>Manage Your Item From Here</h2>
            <div className="row">
                <div className="col-lg-10 w-100 mx-auto">
                    <MDBTable responsive bordered borderColor="primary" >
                        <MDBTableHead>
                            <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Price</th>
                                <th scope='col'>Supplier</th>
                                <th scope='col'>Available Quantity</th>
                                <th scope='col'>Manage</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            <tr>
                                <th scope='row'>1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </MDBTableBody>
                    </MDBTable>
                </div>
            </div> 
        </div>
    );
};

export default Table; <h2 className='mt-2'>Manage Your Item From Here</h2>
            <div className="row">
                <div className="col-lg-10 w-100 mx-auto">
                    <MDBTable responsive bordered borderColor="primary" >
                        <MDBTableHead>
                            <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Price</th>
                                <th scope='col'>Supplier</th>
                                <th scope='col'>Available Quantity</th>
                                <th scope='col'>Manage</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            <tr>
                                <th scope='row'>1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </MDBTableBody>
                    </MDBTable>
                </div>
            </div>