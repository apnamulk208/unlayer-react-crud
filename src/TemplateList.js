import React, { useState, useEffect } from 'react';
// import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Bar,DeleteTemplate, EditTemplate, NewTemplate, CardContainer, Card, CardTitle,ActionButton  } from './styled.components'
export const useMountEffect = (fun) => useEffect(fun, []); // runs only once
export default function TemplateList(props) {
  const [data, setData] = useState([]);

  useMountEffect(() => {

    async function fetchData() {
      // debugger;
      try {
        // get data from json-server apis
        let data_ = await (await fetch('http://localhost:3001/templates')).json();

        setData(data_);

      } catch (e) {

        console.log(e);

        setData([])
      }
    }

    fetchData();

  });
  // debugger
  function deleteItem(id) {
    fetch(`http://localhost:3001/templates/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: '5bdcdfa40f0a326f858feae0' })
    })
      .then(res => res.text()) // OR res.json()
      .then(res => {
        let data_ = data.filter(el => el.id !== id);
        setData(data_ )
      })
      .catch(console.log)
  }
  return (
    <>
      <Bar>
        <h1>Create Template</h1>
        <NewTemplate to="/new">New Template</NewTemplate>
      </Bar>
      <CardContainer>
        {data.length ?  data.map((el, i, array) => {
          // debugger
          return <Card key={el.id}>
            <div>
              <CardTitle>
                {el.name}
              </CardTitle>
              <EditTemplate to={{ pathname: `/edit/${el.name}`, state: el }}>Edit</EditTemplate>
              <DeleteTemplate onClick={() => {
                deleteItem(el.id)
              }}>Delete</DeleteTemplate>
            </div>
          </Card>
        }): ''}
      </CardContainer>
    </>
  )

}

export { TemplateList }