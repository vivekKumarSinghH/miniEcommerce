import { Pagination } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { setPage } from '../Redux/Products/Actions';

export default function PaginationComp({total,page}) {
const dispatch=useDispatch()
    const handleChange = (event, value) => {
    
        dispatch(setPage(value))
      };
 
    return (
    <>
    <Pagination count={+total} page={page} color="secondary"  onChange={handleChange}/>
        
    </>
  )
}