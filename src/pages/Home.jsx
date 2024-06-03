import React,{useEffect, useState} from 'react'
import {getAllMeans} from '../api/means'
import CardComp from '../components/CardComp'
import { Container, Row, Col } from 'react-bootstrap';


function Home() {


    const [data, setData]=useState([]);

    useEffect(()=>{
        getAllMeans().then(memes=>setData(memes.data.memes));
    },[])
    
  return (
    <Container>
    <Row>
      {data.map((el) => (
        <Col key={el.id }>  {/* Provide a unique key */}
          <CardComp img={el.url} title={el.name} />
        </Col>
      ))}
    </Row>
  </Container>
  )
}

export default Home