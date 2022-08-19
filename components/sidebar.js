import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi'

const buttonStyle = `
    flex justify-between
    items-center w-48 h-12 
    pl-4 p-2 bg-gray-800 
    text-white 
    hover:opacity-70
    cursor-pointer
`;

export default function Sidebar({
   isOpen
}) {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    
    useEffect(() => {
        setIsSideBarOpen(isOpen);
    }, [isOpen])

    const router = useRouter();
    const onOverviewClicked = () => {
        router.push("/");
    }
    const onGoalsClicked = () => {
        router.push("/goals");
    }
    const onSettingsClicked = () => {
        router.push("/settings")
    }
    return (
        isSideBarOpen && 
        (<div className="flex flex-col w-48 h-full bg-gray-500 ml-3">
            <div className={buttonStyle} onClick={onOverviewClicked}>
                Overview
            </div>
            <div className={buttonStyle} onClick={onGoalsClicked}>
                Goals
            </div>
            <div className={buttonStyle} onClick={onSettingsClicked}>
                Settings
            </div>
        </div>)
    )
}