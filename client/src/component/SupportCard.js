import clientData from '../data/client'
import '../styles/card.scss'
import play from '../assets/2Group.png'
const SupportCard = () => {
    return (
        <div id='SupportCard'>
            <div className="container listCard">
                <div className="listCards row">
                    {clientData.map((clientDatas) =>
                        <div className="support-card" key={clientDatas.id}>
                            <div className="imgHolder">
                                <img src={clientDatas.image} alt="" />
                            </div>
                            <h1>{clientDatas.title}</h1>
                            <p>{clientDatas.desc}</p>

                            <div className="btnHolder">
                                <button className="one"><img src={play} alt="" /> Watch Youtube</button>
                                <button className="two">User Guide</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SupportCard