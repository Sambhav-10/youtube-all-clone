import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../../utils/navSlice'
import { useParams, useSearchParams } from 'react-router-dom'

const WatchPage = () => {

const [searchParams] = useSearchParams()
console.log(searchParams.get("v"));

const dispatch = useDispatch()

    useEffect(()=>{
 dispatch(closeMenu())
    },[])
  return (
    <div>
     <iframe width="560" height="315" src={`https://www.youtube.com/embed/${searchParams.get("v") }?si=ZxaFFMwM4MMgVQ5a`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default WatchPage
