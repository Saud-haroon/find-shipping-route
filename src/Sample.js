<label>Select your origin</label>
      <select onChange={handleOrigin}>
        {/* <option value=""> test</option> */}
        {Port.map((p) => (
          <option key={p.id} value={p.id}>
            {p.port}
          </option>
        ))}
      </select>
      <h3>{origin.port}</h3>
      <label>Select your destination</label>
      <select onChange={handleDestination}>
        {/* <option value=""> test</option> */}
        {Port.map((p) => (
          <option key={p.id} value={p.id}>
            {p.port}
          </option>
        ))}
      </select>
      <h3>{destination.port}</h3>