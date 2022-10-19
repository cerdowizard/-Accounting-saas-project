import '../styles/table.scss'
const Table = (props) => {
    return (
        <div className='tables container'>
            <div className="left">
                <div className="title">
                    <h4>Features</h4>
                    
                </div>
            </div>
            <div className="right">
                <div className="title">
                    <h4>Basic </h4>
                </div>
                <div className="title">
                    <h4>Medium</h4>
                </div>
                <div className="title">
                    <h4>Advance</h4>
                </div>
                <div className="title">
                    <h4>Tax Module</h4>
                </div>
                
                <div className="list"></div>
            </div>
        </div>
    )
}

export default Table