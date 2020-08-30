import React,{ useState, useEffect } from 'react';
import Ranks from './ranks';
import Brands from './Brands';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Avatar, Typography, Divider, Input } from 'antd';
const { Title } = Typography;
const { Search } = Input;

const Topten = (props) => {
    const [all,setAll] = useState([]);
    const [searcharr,setSearcharr] = useState([]);
    const [query,setQuery] = useState("");
    let url = props.path.split('_').join(' ').split('/');
    let display = url[url.length-1]; 

    useEffect(()=>{
        let al_dup = JSON.parse(localStorage.getItem('country_values'))[display];
        al_dup = al_dup.sort(Topten.compare);
        setAll(al_dup);
    },[]);


    useEffect(()=>{
        if(query!==""){
            let arr = [];
            all.forEach(element => {
                if(element.Brand.toLowerCase().includes(query)) arr.push(element);
            });
            setSearcharr(arr);
            console.log(searcharr);
        }
    }
    ,[query])



    return (
        <div>
            <div>
            <Link to='/'>
                <ArrowLeftOutlined style={{ fontSize: '48px', color: 'lightgreen' }}/>
            </Link>
            <Divider>
                <Title level={1} type="success">
                    <Avatar style={{ height:"60px",width:"60px" }} src={`https://www.countryflags.io/${props.countrycode[display.split(' ').join('_')]}/flat/64.png`} />
                    {display}
                </Title>
            </Divider>
            <Search
                placeholder="search by Brands"
                onChange={(e) => setQuery(e.target.value)}
                style={{ width: "80%",padding:"10px",left:"10%",right:"10%" }} 
            />
            {query && <Title level={2}  style={{ textAlign:"center" }}>Searched Brands...</Title>}
            {query && <Brands searches = {searcharr} />}
            {query && searcharr.length===0 && <Title level={4} type="danger" style={{ textAlign:"center" }}>Search Again</Title>}
            </div>
            {query==="" && <Title level={2} style={{ textAlign:"center" }}>Top Ten</Title>}
            {query==="" && <div className="show2"> 
                <Ranks all={all} />
            </div>}
        </div>
    )
}

Topten.compare = (a,b)=>{
    if(Number(a['Top Ten']) < Number(b['Top Ten'])) return -1;
        return 1;
}



export default Topten;
