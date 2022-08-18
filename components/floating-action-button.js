import { FaPlus } from 'react-icons/fa'
const FloatingActionButton = ({
    onClick = () => {}
}) => {
    return (
        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-sky-500 active:bg-sky-600"
            onClick={onClick}>
            <FaPlus className="w-12 h-12 p-3 fill-white hover:fill-slate-300" />
        </div>
    )
}

export default FloatingActionButton;