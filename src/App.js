import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Country from './Components/Country';
import Header from './Components/Header';


function App() {
  
  var [countryList,setCountryList] = useState([]);
  var [reload, setReload] = useState(false);

  const url = "https://restcountries.eu/rest/v2/region/asia?fields=name;capital;flag;region;subregion;population;borders;languages;alpha3code";
  

  //Asynchronous REST API call function
  const getData = async () => {
    const {data} = await axios.get(url);
    setCountryList(data);
  };
  

  //Reload has been set as useState Dependency, Whenever Reload button is clicked the value of reload is changed,
  //This triggers useEffect and the Data is reloaded from the REST API
  useEffect(() => {
    getData();
  }, [reload]);

  return (
    <div className="App">
      <div>
        <Header reloadVal={reload} reloadFn={setReload}/>
      </div>
      <div className="countryList">
          { 
          countryList.map((countryItem) => {
            return <>
            <Country country={countryItem} key={countryItem.alpha3code}/><hr /> </>
          })}
      </div>
    </div>
  );
}

export default App;
