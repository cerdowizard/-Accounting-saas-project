import '../styles/table.scss'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
const Intable = () => {
    const data = [
        {
            "id": "1",
            "Type": "new",
            "Selection": "middle-class",
            "desc": "lorem in making",
            "QTY": 1,
            "Class": "middle-classes",
            "Amount": 6760,
            "Disc": 20,
            "VAT": 42,
            "VATs": 0.5,
            "Total": 9707
        },
        {
            "id": "2",
            "Type": "new",
            "Selection": "middle-class",
            "desc": "lorem in making",
            "QTY": 1,
            "Class": "middle-classes",
            "Amount": 6760,
            "Disc": 20,
            "VAT": 42,
            "VATs": 0.5,
            "Total": 9707
        },
        {
            "id": "3",
            "Type": "new",
            "Selection": "middle-class",
            "desc": "lorem in making",
            "QTY": 1,
            "Class": "middle-classes",
            "Amount": 6760,
            "Disc": 20,
            "VAT": 42,
            "VATs": 0.5,
            "Total": 9707
        },
        {
            "id": "4",
            "Type": "new",
            "Selection": "middle-class",
            "desc": "lorem in making",
            "QTY": 1,
            "Class": "middle-classes",
            "Amount": 6760,
            "Disc": 20,
            "VAT": 42,
            "VATs": 0.5,
            "Total": 9707
        },
        {
            "id": "5",
            "Type": "new",
            "Selection": "middle-class",
            "desc": "lorem in making",
            "QTY": 1,
            "Class": "middle-classes",
            "Amount": 6760,
            "Disc": 20,
            "VAT": 42,
            "VATs": 0.5,
            "Total": 9707
        },
        {
            "id": "6",
            "Type": "new",
            "Selection": "middle-class",
            "desc": "lorem in making",
            "QTY": 1,
            "Class": "middle-classes",
            "Amount": 6760,
            "Disc": 20,
            "VAT": 42,
            "VATs": 0.5,
            "Total": 9707
        },

    ]
    return (
        <div>
            <div id='Intable'>
                <table className="table mt-5">
                    <thead className='heading'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Type</th>
                            <th scope="col">Selection</th>
                            <th scope="col">Description</th>
                            <th scope="col">QTY</th>
                            <th scope="col">Class</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Disc %</th>
                            <th scope="col">VAT %</th>
                            <th scope="col">VAT </th>
                            <th scope="col">Total</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((listDatas) => (
                                <tr key={listDatas.id}>
                                    <th scope="row">{listDatas.id}</th>
                                    <td>{listDatas.Type}</td>
                                    <td>{listDatas.Selection}</td>
                                    <td>{listDatas.Disc}</td>
                                    <td>{listDatas.QTY}</td>
                                    <td>{listDatas.Class}</td>
                                    <td>{listDatas.Amount}</td>
                                    <td>{listDatas.Disc}%</td>
                                    <td>{listDatas.VAT}%</td>
                                    <td>{listDatas.VAT}</td>
                                    <td>{listDatas.Total}</td>
                                    <td><DeleteForeverIcon /></td>
                                    <td><ModeEditOutlineIcon /></td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
           
            </div>
        </div>
    )
}

export default Intable