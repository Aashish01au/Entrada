import React from 'react'
import { useParams } from 'react-router-dom'

function Category() {
  let {cid}=useParams()
  return (
    <>
    <h1>hello sir {cid}</h1>
    </>
  )
}

export default Category