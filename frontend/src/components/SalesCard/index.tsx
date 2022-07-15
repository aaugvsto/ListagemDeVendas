import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RedButtonUser from '../RedButtonUser';
import { BASE_URL } from "../../utils/request";
import './style.css';
import { Sale } from "../../models/sale";

function SalesCard() {

  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {

    const dMin = minDate.toISOString().slice(0, 10);
    const dMax = maxDate.toISOString().slice(0, 10);

    axios.get(`${BASE_URL}/sales?minDate=${dMin}&maxDate=${dMax}`)
      .then(res => {
        setSales(res.data.content);
      })
  }, [minDate, maxDate])

  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div className="row">
        <div className="dsmeta-form-control-container">
          <label className="dsmeta-sales-title">Data Inicial:</label>
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-form-control-container data2">
        <label className="dsmeta-sales-title">Data Final:</label>
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            {sales.map(sale => {
              return (
                <tr key={sale.id}>
                  <td className="show992">{sale.id}</td>
                  <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                  <td>{sale.sellerName}</td>
                  <td className="show992">{sale.visited}</td>
                  <td className="show992">{sale.deals}</td>
                  <td>R$ {sale.amount.toFixed(2)}</td>
                  <td>
                    <div className="dsmeta-red-btn-container">
                      <RedButtonUser saleId={sale.id}/>
                    </div>
                  </td>
                </tr>
              )
            })

            }
          </tbody>

        </table>
      </div>

    </div>
  )
}

export default SalesCard;