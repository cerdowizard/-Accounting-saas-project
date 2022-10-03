import '../styles/headers.scss'
const Headers = ({title, subText}) => {
  return (
    <div id='Headers'>
          <div className="headerHolder">
              <h1>{title}</h1>
              <p>{subText}</p>
          </div>
         
    </div>
  )
}

export default Headers