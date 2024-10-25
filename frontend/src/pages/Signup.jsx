import SignupForm from "../components/ui/SignupForm"
import { BackgroundLines } from "../components/ui/BackgroundLines"


export default function Signup() {
    return (
        <div className="">
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                <SignupForm />
            </BackgroundLines>

        </div>
    )
}