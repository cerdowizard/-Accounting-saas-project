
const ListTabel = () => {
    return (
        <div id='Intable'>
            <table className="table mt-2">
                <thead className='heading'>
                    <tr>
                        <th scope="col"><input type="checkbox" /></th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Balance</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telephone</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">
                            <input type="checkbox" />
                        </td>
                        <td>Company A</td>
                        <td>Developer</td>
                        <td>₦50,000</td>
                        <td>Wade Warren</td>
                        <td>dolores.chambers@example.com</td>
                        <td>Active</td>
                        <td className='dropdown'>
                            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Actions
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item active" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>

                            </ul>

                        </td>
                    </tr>
                   
                    <tr>
                        <td scope="row">
                            <input type="checkbox" />
                        </td>
                        <td >Company B</td>
                        <td>Developer</td>
                        <td>₦50,000</td>
                        <td>Wade Warren</td>
                        <td >dolores.chambers@example.com</td>
                        <td>Active</td>
                        <td className='dropdown'>
                            <span class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Actions
                            </span>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item active" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>

                            </ul>

                        </td>
                    </tr>

                    <tr>
                        <td scope="row">
                            <input type="checkbox" />
                        </td>
                        <td>Company C</td>
                        <td>Developer</td>
                        <td>₦50,000</td>
                        <td>Wade Warren</td>
                        <td>dolores.chambers@example.com</td>
                        <td >
                            <span className='act'>Active</span>
                        </td>
                        <td>
                            <span class="btn dropdown-toggle" data-bs-toggle="dropdown" >
                                Actions
                            </span>
                            <span class="dropdown-menu">
                                <li><a class="dropdown-item active" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>

                            </span>

                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
}

export default ListTabel