import React from 'react'

const Table = (props) => {
    return (
        <div>
            <table class="table caption-top container">
                <caption>List of users</caption>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>

                    {props.data ? props.data.map((user, index) => {
                        return (<tr key={index}>
                            <th scope="row">{++index}</th>
                            <td><input type="text" placeholder='name'/></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                        </tr>)
                    }) : ""}
                </tbody>
            </table>

        </div>
    )
}

export default Table