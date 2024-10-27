import SigninForm from "../components/ui/SigninForm"
import { BackgroundLines } from "../components/ui/BackgroundLines"
import Navibar from "../common/navbar"

export default function Signin() {
    return (
        <div className="">
            <Navibar />
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                <SigninForm />
            </BackgroundLines>

        </div>
    )
}
