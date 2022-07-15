import axios from 'axios';
import icon from '../../assets/img/IconUser.svg'
import { BASE_URL } from '../../utils/request';
import './style.css'

type Props = {
     saleId: number;

}

function handleClick(saleId: number){
    axios(`${BASE_URL}/sales/${saleId}/notification`)
        .then(res => {
            console.log("Sucesso!")
        })
}

function RedButtonUser({saleId} : Props){
    return(
       <div className="red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar" />
       </div>
    )
}

export default RedButtonUser