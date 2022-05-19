import React from 'react';

const AddItems = () => {
    return (
        <div className=' container '>
            <h2 className='text-center my-4'>Add Items</h2>
            <form >
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder='type your item name' />
                </div>
                <div className="mb-3">
                    <label for="name" className="form-label">Supplier Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder='type your supplies name' />
                </div>
                <div className="mb-3">
                    <label for="price" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price" placeholder='type your Price' />
                </div>
                <div className="mb-3">
                    <label for="quantity" className="form-label">Quantity</label>
                    <input type="number" className="form-control" id="quantity" placeholder='type your Quantity' />
                </div>
                <div className="mb-3">
                    <label for="quantity" className="form-label">Quantity</label>
                    <textarea name="text" className="form-control" id="quantity" cols="30" rows="10" placeholder='type your text'></textarea>
                </div>
                <div className="mb-3">
                    <label for="name" className="form-label">Image</label>
                    <input type="file" className="form-control" id="name" aria-describedby="emailHelp" placeholder='type your supplies name' />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddItems;