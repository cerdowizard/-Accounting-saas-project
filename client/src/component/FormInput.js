import '../styles/inputs.scss'
const FormInput = ({ lable, type, placeholder }) => {
    return (
        <div id='FormInput'>
            <div className="lables">
                <lable>{lable}</lable>
            </div>
            <div className="input">
                <input type={type} placeholder={placeholder} />
            </div>
           
        </div>
    )
}

export default FormInput