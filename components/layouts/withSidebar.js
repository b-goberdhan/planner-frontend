import Sidebar from "../sidebar"


export default function WithSideBar({children}) {
    return (
        <div class="flex h-full">
            <Sidebar/>
            { children }
        </div>
    )
}