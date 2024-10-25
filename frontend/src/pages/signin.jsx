import SignupForm from "../components/ui/SigninForm"
import { BackgroundLines } from "../components/ui/BackgroundLines"


export default function Signup() {
    return (
        <div className="">
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                <SigninForm />
            </BackgroundLines>

        </div>
    )
}