
import {House} from "../types/house";
import config from "../config";
import { useState } from "react";

const HouseList = () => 
{
    const [houses, setHouses] = useState<House[]>([]);


    //fetching the data from the backend Api
    const fetchHouses = async () => {
        const rsp = await fetch(`${config.baseApiUrl}/houses`);
        // deserialize the response into an array
        const houses = await rsp.json();

        // change the state with a new array - update
        setHouses(houses);
    };
    // call the async function
    fetchHouses();
return (
    <div>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((h) => (
            <tr key={h.id}>
                <td>{h.address}</td>
                <td>{h.country}</td>
                <td>{h.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Link className="btn btn-primary" to="/house/add">
        Add
      </Link> */}
    </div>
    )
}

export default HouseList;