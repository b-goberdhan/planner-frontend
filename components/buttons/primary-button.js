import { useEffect, useState } from "react"
import LoadingSpinner from "../loading-spinner";

const PrimaryButton = ({
    onClick = () => {},
    text = '',
    hasSpinner = false,
    isLoading = false
}) => {
    const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
    useEffect(() => {
        hasSpinner && setShowLoadingSpinner(isLoading);
    }, [isLoading])
    return (
        <button className="
        flex p-2 px-4 justify-between items-center
        rounded text-white bg-blue-500
        active:opacity-95
        hover:opacity-80 
        ">
            <p>{text}</p>
            { 
                hasSpinner && showLoadingSpinner &&  (<div className="mr-2">
                    <LoadingSpinner/>
                </div>)
            }
        </button>
    )
}

export default PrimaryButton