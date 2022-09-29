import React from 'react'
import '../styles/card.scss'
import cardHolderImg from '../assets/Image and Icon.png'
const Cards = () => {

    const data = [
        {
            'id': 1,
            'title': 'Manage Your Books',
            'subText': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
            image:
                "https://res.cloudinary.com/dnfrrvwgl/image/upload/v1664347796/Image_and_Icon_obdkq7.png",
        },
        {
            'id': 2,
            'title': 'Manage inventory',
            'subText': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
            image:
                "https://res.cloudinary.com/dnfrrvwgl/image/upload/v1664347796/Image_and_Icon_obdkq7.png",
        },
        {
            'id': 3,
            'title': 'Invoice your customers',
            'subText': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
            image:
                "https://res.cloudinary.com/dnfrrvwgl/image/upload/v1664347796/Image_and_Icon_obdkq7.png",
        },
        {
            'id': 4,
            'title': 'Create & manage budgets',
            'subText': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
            image:
                "https://res.cloudinary.com/dnfrrvwgl/image/upload/v1664347796/Image_and_Icon_obdkq7.png",
        },
        {
            'id': 5,
            'title': 'Track expenses',
            'subText': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
            image:
                "https://res.cloudinary.com/dnfrrvwgl/image/upload/v1664347796/Image_and_Icon_obdkq7.png",
        },
        {
            'id': 6,
            'title': 'Premium support',
            'subText': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
            image:
                "https://res.cloudinary.com/dnfrrvwgl/image/upload/v1664347796/Image_and_Icon_obdkq7.png",
        },
    ]
  return (
      <div id='Cards' className='container'>
          <div className="row rowCard">
              {data.map((datas) => ( 
                  <div className="cardHolder" key={datas.id}>
                      <div className="imgHolder">
                          <img src={datas.image} alt="" />
                      </div>
                      <div className="title">
                          <h1>{datas.title}</h1>
                      </div>
                      <div className="subText">
                          <p>{datas.subText }</p>
                      </div>
                      <div className="buttonHolder">
                          <button>Explore</button>
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