import React from 'react'
import '../styles/card.scss'
const Cards = () => {

    const data = [
        {
            'id': 1,
            'title': 'Customers',
            'subText': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
            image:
                "https://res.cloudinary.com/dnfrrvwgl/image/upload/v1664733894/Features_Icon_x6a3tn.png",
            details: [
                { 'info': 'Create estimates, sales order  / Sales Proposal' },
                { 'info': 'Conert estimates to invoice' },
                { 'info': 'Create invoices' },
                { 'info': 'Receive payments' },
                { 'info': 'Cash/Bank sales' },
                { 'info': 'Credit notes / Discount' },
                { 'info': 'Track receivables' },
            ],
        },
        {
            'id': 2,
            'title': 'Vendors/ Suppliers',
            image:
                "https://res.cloudinary.com/dnfrrvwgl/image/upload/v1664734217/Features_Icon_xbn3mt.png",
            details: [
                { 'info': 'Create estimates, sales order  / Sales Proposal' },
                { 'info': 'Conert estimates to invoice' },
                { 'info': 'Create invoices' },
                { 'info': 'Receive payments' },
                { 'info': 'Cash/Bank sales' },
                { 'info': 'Credit notes / Discount' },
                { 'info': 'Track receivables' },
            ],
        },
        {
            'id': 3,
            'title': 'Payroll /  Human resources',
            image:
                "https://res.cloudinary.com/dnfrrvwgl/image/upload/v1664734542/Features_Icon_tstyfe.png",
            details: [
                { 'info': 'Create estimates, sales order  / Sales Proposal' },
                { 'info': 'Conert estimates to invoice' },
                { 'info': 'Create invoices' },
                { 'info': 'Receive payments' },
                { 'info': 'Cash/Bank sales' },
                { 'info': 'Credit notes / Discount' },
                { 'info': 'Track receivables' },
            ],
        },
    ]
    return (
        <div id='Cards' className='container'>
            <div className="row rowCard">
                {data.slice(0, 3).map((listData) => (
                    <div className="cardHolder" key={listData.id}>
                        <div className="imgHolder">
                            <img src={listData.image} alt="" />
                        </div>
                        <div className="title">
                            <h1>{listData.title}</h1>
                        </div>
                        <div className="list">
                            <ul>
                                {listData.details.map(experience => (
                                    <li key={experience.index}>{experience.info}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="buttonHolder">
                            <button>Read more</button>
                        </div>

                    </div>
                ))}
                <div className="seeAllFeatures">
                    <button>See all features</button>
                </div>
            </div>

        </div>
    )
}

export default Cards