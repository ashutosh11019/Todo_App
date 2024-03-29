import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Plan(props) {
    return (
        <>
            <li className='shadow p-2 my-2 col-sm-9'>{props.value}</li>
            <button className='btn btn-danger my-2 col-sm-2 offset-1'
                onClick={() => { props.data(props.id) }} >Delete</button>
        </>
    )
}
