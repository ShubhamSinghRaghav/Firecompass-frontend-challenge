import React from 'react'
import { Card,Progress, Typography, Tag } from 'antd';
const { Title,Text } = Typography;

export const Brands = (props) => {
    return (
        <div className="chow4">
            {props.searches.map((elem,index)=>(
                <Card className="chow5" key={index} style={{ marginLeft:"50px" ,fontSize:"30px" , width: 300, marginTop: 16, backgroundColor:"rgb(218, 233, 248)",borderRadius:"10px" }}>
                    <Title level={3}><Text mark>{elem.Brand}</Text></Title>
                    <Progress 
                        width={80} 
                        type="circle"
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={(elem.Stars==="Nan" || elem.Stars==="NaN")?0:Number(elem.Stars)*20} 
                        format={(percent) => `${percent/20} star`}
                    /><br/>
                    {(elem.Style==="Nan" || elem.Style==="NaN")?
                        (<Tag color="red"><Title level={5} type="danger">No Style yet</Title></Tag>):(<Tag color="green"><Title level={5} type="success">{elem.Style}</Title></Tag>)
                    }
                    <Title level={5}>{elem.Variety}</Title>
                </Card>
            ))}
        </div>
    )
}

export default Brands;