import { useContext } from 'react'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import MyContext from '../../context/data/MyContext'


function Order() {
    const context=useContext(MyContext);
    console.log(context);
    const{name,rollno}=context
  return (
    <>
    <Layout>
        <h3>Order Page</h3>
    <h1>Name: {name}</h1>
        <h1>RollNo.:{rollno}</h1>
    </Layout>
    </>
  )
}

export default Order