import ArrowLeftBlack from "../../../public/ArrowLeftBlack.svg"
import TitleDescription from '../atoms/TitleDescription'
import Button from '../atoms/Button'

function DescriptionOnlineCode() {
  return (
    <div className="w-full bg-bg-section flex items-center justify-center flex-col gap-y-4 py-28">
        <div>
            <TitleDescription
                title="میتونی به صورت آنلاین با سلام کار کنی 🚀"
                description="اولین زبان برنامه نویسی فارسی، اونم کاملا رایگان باورت میشه ؟"
            />
        </div>
        <Button
            text="بزن بریم"
            variant="buttonWhite"
            type="link"
            href="/404"
            icon={<span>
                <ArrowLeftBlack />
            </span>}
        />
    </div>
  )
}

export default DescriptionOnlineCode
