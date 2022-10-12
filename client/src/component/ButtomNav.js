import '../styles/buttomNav.scss'

const ButtomNav = () => {
    return (
        <div>
            <div id="ButtomNav">
                <nav>
                    <div className="left">
                        <button className="btnOne">Cancel</button>
                        <button className="btnTwo">Clear</button>
                    </div>
                    <div className="middle">
                        <ul>
                            <li>Email</li>
                            <span></span>
                            <li>Email Delivery Note</li>
                            <span></span>
                            <li>Print Delivery Note</li>
                            <span></span>
                            <li>Print Review</li>
                        </ul>
                    </div>
                    <div className="right">
                        <button className="save">Save</button>
                        <button className="btnTwo">Save and new</button>
                        <button className="btnTwo">Save and Send</button>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default ButtomNav