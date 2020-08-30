import React from 'react'
import { Badge, Card,Progress, Typography, Tag } from 'antd';
const { Title,Text } = Typography;


const ranks = (props) => {
    return (
            props.all.map((elem,index)=>(
                            <Card className="chow2" key={index} style={{ marginLeft:"50px" ,fontSize:"30px" , width: 300, marginTop: 16,backgroundColor:"rgb(229, 245, 229)", borderRadius:"10px"  }}>
                                <Badge.Ribbon className="chow3" text={`Rank ${index+1}`} style={{ height:"40px", fontSize:"20px" }}>
                            <Title level={3}><Text mark>{elem.Brand}</Text></Title>
                                <Progress 
                                    active 
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
                                </Badge.Ribbon>
                            </Card>
                        ))
    )
}

export default ranks; 
