import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit'
const AddItem = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-8">
                    <form >
                        <MDBInput label='Product Name' id='productName' name='productName' type='text' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;