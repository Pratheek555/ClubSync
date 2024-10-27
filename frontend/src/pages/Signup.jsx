import SignupForm from "../components/ui/SignupForm"
import { BackgroundLines } from "../components/ui/BackgroundLines"
import Navibar from "../common/navbar"

export default function Signup() {
    return (
        <div className="">
            <Navibar></Navibar>
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                <SignupForm />
            </BackgroundLines>

        </div>
    )
}