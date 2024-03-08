import React from 'react'

const FormPermissionRequest = ({permissionType}) => {
    return (
        <div className='form-request'>
            <h1 for="inputEmail4" class="form-label">{permissionType}</h1>
            <form class="row g-3">
                <div class="row">
                    <div class="col">
                        <label for="inputEmail4" class="form-label">First Name</label>
                        <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div class="col">
                        <label for="inputEmail4" class="form-label">Last Name</label>
                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" placeholder='Email' />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Phone Number</label>
                    <input type="number" class="form-control" id="phoneNumber" 
                    placeholder='Phone Number'/>
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="inputZip" />
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label" for="gridCheck">
                            Accetp all terms and conditions
                        </label>
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Request</button>
                </div>
            </form>
        </div>
    )
}

export default FormPermissionRequest