import '../styles/tabelz.scss'
const Table = (props) => {
    const data = [
        {
            // https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_olo41v.png
            "id": 1,
            "name": "Email/ printareports, export reports -excel, microsoft word",
            image:
                "https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png",
            image:
                "https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png",
            image:
                "https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png",
            image:
                "https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png",
        },
        {
            // https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_olo41v.png
            "id": 1,
            "name": "Email/ printareports, export reports -excel, microsoft word",
            image:
                "https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png",
            image:
                "https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png",
            image:
                "https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png",
            image:
                "https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png",
        },
    ]
    return (
        <div className='tablez container mb-5 mt-5'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Features</th>
                        <th scope="col">Basic </th>
                        <th scope="col">Medium</th>
                        <th scope="col">Advance</th>
                        <th scope="col">Tax Module</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {

                        data.map((data) => (
                            < tr >
                                <td>{data.name}</td>
                                <td><img src={data.image} alt="" /></td>
                                <td><img src={data.image} alt="" /></td>
                                <td><img src={data.image} alt="" /></td>
                                <td><img src={data.image} alt="" /></td>
                            </tr>
                        ))
                    } */}
                    <tr>
                        <td>Email/ printareports, export reports -excel, microsoft word</td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td>Email/ printareports, export reports -excel, microsoft word</td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td>Journal entry</td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td>Configure with local sales tax rates</td>
                        <td><img src=" https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_olo41v.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td>Control what users can access</td>
                        <td><img src=" https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_olo41v.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td>Payroll - (Gross Salary, Loan, Statutory deductions e.t.c)</td>
                        <td><img src=" https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_olo41v.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td>Track Inventory</td>
                        <td><img src=" https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_olo41v.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td>Track sales and profitability for each of your locations</td>
                        <td><img src=" https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_olo41v.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                    </tr>

                    <tr>
                        <td>Tracking VAT deduction</td>
                        <td><img src=" https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_olo41v.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                    </tr>

                    <tr>
                        <td>Tracking WHT deduction at source</td>
                        <td><img src=" https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_olo41v.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                    </tr>

                    <tr>
                        <td>Capital allowance computation</td>
                        <td><img src=" https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_olo41v.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td>Company income tax computation</td>
                        <td><img src=" https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_olo41v.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                    </tr>

                    <tr>
                        <td>Non-current/Asset schedule </td>
                        <td><img src=" https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_olo41v.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                    </tr>

                    <tr>
                        <td>VAT payables</td>
                        <td><img src=" https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_olo41v.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                        <td><img src="https://res.cloudinary.com/dnfrrvwgl/image/upload/v1666198227/Group_1_gjl97h.png" alt="" /></td>
                    </tr>

                </tbody>
            </table>
        </div >
    )
}

export default Table