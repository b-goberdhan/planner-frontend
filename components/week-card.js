import { useEffect, useState } from "react";

const WeekCard = ({
    name,
    onClick = () => {}
}) => {

    return (
        <div className={`
            w-full h-12 
            flex bg-gray-300 
            items-center p-2
            border-l-8
            rounded
            cursor-pointer
            `}
            onClick={() => onClick()}>
            {name}
        </div>
    )
    
}

export default WeekCard;