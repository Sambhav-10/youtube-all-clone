import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const isManuOpen = useSelector((store) => store.nav.isManuOpen)

  return !isManuOpen ? null : (
    <div className='w-[200px]  h-[90vh] fixed bg-slate-400 '>
        <section className='p-1 '>
            <div className='flex items-center'>
                <img className='w-1/3' src="https://endlessicons.com/wp-content/uploads/2012/11/home-icon-614x460.png" alt="" />
                <Link to={"/"}><p>Home</p></Link>
            </div>
            <div className='flex items-center'>
                <img className='w-1/3' src="https://cdn.pixabay.com/photo/2023/03/30/17/30/ai-generated-7888387_640.png" alt="" />
                <p>Shorts</p>
            </div>
           
            <div className='flex  items-center w-full'>
                <img className='ml-2 w-1/5' src="https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png" alt="" />
                <p>Subscriptions</p>
            </div>
        </section>
     
     
    </div>
  )
}

export default Sidebar
