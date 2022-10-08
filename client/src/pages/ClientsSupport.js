import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Header from '../component/Headers'
const ClientsSupport = () => {
  return (
    <div>
      <Navbar />
      <div id="ClientsSupport">
        <Header title="Client’s support" subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum."/>
      </div>
      <div className="cardSection">
      <Cli/>
      </div>
      <Footer />
    </div>
  )
}

export default ClientsSupport