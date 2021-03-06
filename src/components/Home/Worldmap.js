import React, { Component, useEffect } from 'react';
import axios from 'axios';
import 'mapbox-gl/dist/mapbox-gl.css';

import Legend from "./Legend";
import Map from "./Map";
import { coordinates } from "./country_coordinates";
import './Worldmap.scss';

const initialState = {
  colors: [
    "rgba(5, 155, 247, 0.7)",
    "rgba(233,30,99,0.7)",
    "rgba(53,211,156,0.7)"
  ],
  countries_data: [],
  data_loaded: false,
  fields: ["confirmed", "deaths", "recovered"],
  query: "confirmed"
};

class Worldmap extends Component {
  state = initialState;

  componentDidMount() {
    this.fetchCountryData();
  }
  
  fetchCountryData = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://corona-api.com/countries"
      });

      const countries_data = this.processData(response.data.data);

      this.setState({
        countries_data,
        data_loaded: true
      });
    } catch (e) {
      console.log("unable to retrieve data", e);
    }
  };

  processData = data => {
    let processed = [];

    for (const d of data) {
      let obj = {
        name: d.name,
        code: d.code,
        flag: `https://cdn.staticaly.com/gh/hjnilsson/country-flags/master/svg/${d.code.toLowerCase()}.svg`,
        updated_at: d.updated_at,
        confirmed: d.latest_data.confirmed,
        deaths: d.latest_data.deaths,
        recovered: d.latest_data.recovered
      };

      // Patch for countries' coordinates
      obj["coordinates"] = {
        latitude:
          coordinates.find(f => f.country_code === d.code) !== undefined
            ? coordinates.find(f => f.country_code === d.code).latlng[0]
            : 0,
        longitude:
          coordinates.find(f => f.country_code === d.code) !== undefined
            ? coordinates.find(f => f.country_code === d.code).latlng[1]
            : 0
      };
      processed.push(obj);
    }
    return processed;
  };

  handleSetQuery = query => {
    this.setState({
      query
    });
  };

  render() {

    const { colors, countries_data, data_loaded, fields, query } = this.state;
    const { viewport, modeHandler } = this.state;

    return data_loaded ? (
      <>
        <div className="root">
          <Legend
            colors={colors}
            fields={fields}
            query={query}
            handleSelectLegend={this.handleSetQuery}
          />
          <Map
            colors={colors}
            data={countries_data}
            fields={fields}
            query={query}
          />

        </div>
      </>
    ) : null;
  }
}
export default Worldmap
