import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import {UserContext} from '../App'
import Api, { authApi, endpoints } from '../configs/Api'

const Tourdetail = () => {
    const { tourId } = useParams()
    const [tour, setTour] = useState(null)
    const[user, dispatch] = useContext(UserContext)
    const{ img} = useState()

    useEffect(() => {
        const loadTourById = async () => {
            let res;
                res = await Api.get(endpoints['tour-detail'](tourId))

            console.info(res.data)
           setTour(res.data)
        }

        loadTourById()

    }, [])

    return(
        <Container>
            <h1>concho</h1>
            <h1>{tourId}</h1>
        </Container>
    )
}
export default Tourdetail