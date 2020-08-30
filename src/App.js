import React, { Component } from 'react';
import axios from 'axios';
import Country from './components/country';
import { BrowserRouter, Route } from "react-router-dom";
import Topten from "./components/topten";
import { Divider } from 'antd';

class App extends Component {
  state={
    loading:false,
    countrycode : {
      Singapore:"sg",
      Myanmar:"mm",
      Taiwan:"tw",
      China:"cn",
      Malaysia:"my",
      Japan:"jp",
      Thailand:"th",
      South_Korea:"kp",
      Indonesia:"id",
      Hong_Kong:"hk",
      other:"in"
    }
  }

  async componentDidMount(){
    this.setState({ loading: true });
    const save = await axios.get('http://starlord.hackerearth.com/TopRamen');

    const county = new Set();
    save.data.forEach(c=>{
      let ss = c['Top Ten'].split(' ');
      if(ss.length>1) c['Top Ten'] = String(ss[1][1])
      else c['Top Ten'] = "1000";
      if(c.Country==='SG') c.Country='Singapore';
      if(c.Country==='JP' || c.Country==='JPN') c.Country='Japan';
      if(c.Country.length>3){
        county.add(c.Country);
      }
    })
    const arr = Array.from(county);
    localStorage.setItem("country_names",JSON.stringify(arr));
    
    let topramen = {};
    arr.forEach(c=>{
      let _arr = []; 
      save.data.forEach(cty=>{
        if(cty.Country===c){
          _arr.push(cty);
        }
      })
      topramen[c] = _arr;
    })
    
    localStorage.setItem("country_values",JSON.stringify(topramen));
    this.setState({ loading: false});
  }

  render() {
    const {loading,countrycode} = this.state;
    return (
      <BrowserRouter>
        <Route exact path='/' 
          render={()=>(
            <div className="head">
              <Divider style={{ fontSize:"40px", color:"lightblue" }}>TopRamen</Divider>
            <div className="show">
              <Country loading={loading} countrycode={countrycode}/>
            </div>
            </div>
          )}
        >
        </Route>
        <Route exact path='/country/:id' 
          render={()=>(
            <Topten path={window.location.pathname} countrycode={countrycode}/>
          )}
        >
        </Route>
      </BrowserRouter>

      
    )
  }
}

export default App;
