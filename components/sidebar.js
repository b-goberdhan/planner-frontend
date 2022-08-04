import { useRouter } from 'next/router';
export default function Sidebar({
   
}) {
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
        <div class="flex flex-col w-48 h-full bg-slate-400 pt-12">
            <div class="flex items-center w-48 h-12 p-2" onClick={onOverviewClicked}>Overview</div>
            <div class="flex items-center w-48 h-12 p-2" onClick={onGoalsClicked}>Goals</div>
            <div class="flex items-center w-48 h-12 p-2" onClick={onSettingsClicked}>Settings</div>
        </div>
    )
}