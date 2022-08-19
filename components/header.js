import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Sidebar from './sidebar'

export default function Header({
    
})  {
    const [isSideBarOpen, setIsSideBarOpen] = useState();
    const onMenuClick = () => {
        setIsSideBarOpen(!isSideBarOpen);
    }
    return (
        <div className="w-full h-12 bg-gray-800	flex flex-row items-center justify-between space-x-reverse p-2">
            <div className="w-10 h-10 flex justify-center items-center cursor-pointer text-white" onClick={onMenuClick}><AiOutlineMenu/></div>
            <div className="w-20 flex justify-center items-center text-white">Planner</div>
            <div className="w-20 flex justify-center items-center text-white">Login</div>
            <div className='absolute top-14'>
                <Sidebar isOpen={isSideBarOpen}/>
            </div>
        </div>
    )

}