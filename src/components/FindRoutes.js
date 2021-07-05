import React, {useState}from 'react'
import './FindRoutes.css'


import Routes from '../Data/Routes.js'
import Port from '../Data/Ports.js'

const FindRoutes = () => {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");

    
    const handleOrigin = (e) => {
        const selectedId = e.target.value;
        const selectedOrigin = Port.filter((p) => p.id == selectedId)[0];
        setOrigin(selectedOrigin);
    }

    const handleDestination = (e) => {
        const selectedId = e.target.value;
        const selectedDestination = Port.filter((p) => p.id == selectedId)[0];
        setDestination(selectedDestination);
    }

    const findRoutes = Routes.filter((ele) => {
        return ele.origin === origin.port && ele.destination === destination.port
    });

        
    return (
        <div className="container">
            <div>
        <h1>Find Shipping routes</h1>
      </div>
      <div>
        <div className='card'>
          <label>Choose port of Origin</label>
          <select onChange={handleOrigin} title='origin'>            
            {Port.map((p) => (
              <option key={p.id} value={p.id}>
                {p.port}
              </option>
            ))}
          </select>
          <h3>{origin.port}</h3>

        </div>
        <div className="card">
          <label>Choose port of Destination</label>
          <select onChange={handleDestination} title='destination'>
            {/* <option value=""> test</option> */}
            {Port.map((p) => (
              <option key={p.id} value={p.id}>
                {p.port}
              </option>
            ))}
          </select>
          <h3>{destination.port}</h3>

        </div>

      </div>

      <div className="result">
        <h2>Result</h2>
        <ol>

        {findRoutes.map((r) => (
          <li key={r.id}>
            Transt time from <span>{r.origin}</span> to <span>{r.destination}</span> will be <span>{r.days}</span> days via <span>{r.via}</span>
          </li>
        ))}
        </ol>

      </div>

        </div>
    )
}

export default FindRoutes
