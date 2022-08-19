const Card = ({
    name,
    description,
    numberOfWeeks
}) => {
    return (
        <div className="w-56 h-32 
            flex flex-col 
            justify-between m-2 p-2 
            bg-gray-400 
            hover:bg-gray-500
            border-2 
            border-gray-700">
            <div>
                <div>{name}</div>
                <div>{description}</div>
            </div>
            <div className="flex items-center justify-between">
                <p className="text-xs">weeks of work</p>
                <div>{numberOfWeeks}</div>
            </div>
            
        </div>
    )
    
}

export default Card;