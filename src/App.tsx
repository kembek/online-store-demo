import React, { useEffect, useState } from "react";

import Card from "./components/Card";
import CardList from "./components/CardList";
import "./App.css";

interface Car {
  id: number;
  model: string;
  make: string;
  year: number;
  VIN: string;
  color: string;
}

function App() {
  const [data, setData] = useState<Car[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("server/MOCK_DATA.json");
      const jsonData = await response.json();
      setData(jsonData as Car[]);
    })();
  }, []);

  return (
    <div>
      <header>
        <form>
          <fieldset>
            <legend>
              <h3>Searching</h3>
            </legend>

            <div>
              <label htmlFor="car-title">Search by car title:</label>
              <input type="text" name="car-title" id="car-title" />
            </div>
            <div>
              <label htmlFor="car-year">Sort by car year</label>
              <select name="car-year" id="car-year">
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
              </select>
            </div>
            <div>
              <label htmlFor="car-vin">Search by VIN:</label>
              <input type="text" name="car-vin" id="car-vin" />
            </div>
          </fieldset>
          <fieldset>
            <legend>Sorting</legend>
            <div>
              <label htmlFor="sort-by">Sort by</label>
              <select name="sort-by" id="sort-by">
                <option value="new">new</option>
                <option value="old">old</option>
                <option value="title_asc">title asc</option>
                <option value="title_desc">title desc</option>
              </select>
            </div>
          </fieldset>
        </form>
      </header>

      <main>
        <CardList>
          {data.slice(0, 10).map(({ id, make, model, color, VIN, year }) => (
            <Card
              key={id}
              title={`${make} ${model}`}
              color={color}
              specifications={[
                {
                  key: "ID",
                  value: id,
                },
                {
                  key: "VIN",
                  value: VIN,
                },
                {
                  key: "Year",
                  value: year,
                },
              ]}
            />
          ))}
        </CardList>

        <div>
          <h1>PAGINATION</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
