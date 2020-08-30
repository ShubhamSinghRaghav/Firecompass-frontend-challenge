import React, { Component } from 'react'
import { Button, Skeleton, Card, Avatar } from 'antd';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';

class country extends Component {
    render() {
        const {countrycode,loading} = this.props;  
        const { Meta } = Card;
        let countries = null;
        if(localStorage.getItem("country_names") === null){
            return (
                [1,2,3,4,5,6,7,8,9,10,11,12].map(c=>(
                    <Card key={c} style={{ marginLeft:"50px" ,fontSize:"30px" , width: 300, marginTop: 16, backgroundColor:"rgb(218, 233, 248)",borderRadius:"10px" }}>
                    <Skeleton loading={loading} avatar active>
                    <Meta
                        avatar={
                        <Avatar style={{ height:"60px",width:"60px" }} src="https://www.countryflags.io/us/flat/64.png" />
                        }
                        title=""
                        description=""
                    />
                    </Skeleton>
                </Card> 
            ))
            );
        }
        countries = JSON.parse(localStorage.getItem("country_names"));

            return (
                countries.map(country=>(
                    <Card key={uuid()} style={{ marginLeft:"50px" ,fontSize:"30px" , width: 300, marginTop: 16, backgroundColor:"rgb(218, 233, 248)",borderRadius:"10px" }}>
                        <Skeleton loading={loading} avatar active>
                            <Meta
                                avatar={
                                <Avatar style={{ height:"60px",width:"60px" }} src={`https://www.countryflags.io/${countrycode[country.split(' ').join('_')]}/flat/64.png`} />
                                }
                                title="Country"
                                description=""
                            />
                                <p style={{  margin:"auto" }} >{country}</p>
                                <Link to={`/country/${country.split(' ').join('_')}`}>
                                    <Button type="primary" block>View</Button>
                                </Link>
                        </Skeleton>
                    </Card>
                ))
            )
    }
}

export default country;