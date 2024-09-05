import ArrowLeftBlack from "../../../public/arrowleftblack.svg";
import TitleDescription from "../atoms/TitleDescription";
import Vactor1 from "../../../public/vector12.svg";
import Group1 from "../../../public/group97.svg";
import Vactor2 from "../../../public/group912.svg";
import Button from "../atoms/Button";

function DescriptionOnlineCode() {
  return (
    <div className="w-full bg-bg-section relative">
      <div
        className={
          "container w-full mx-auto flex items-center justify-center flex-col gap-y-4 py-32"
        }
      >
        <div className={"hidden md:block absolute w-11/12 2xl:w-10/12 z-10 opacity-30"}>
          <Vactor1 />
        </div>
        <div className={"absolute w-full h-full top-1/2 -translate-y-1/2 z-10"}>
          <Group1 />
          <div className={"absolute w-[70px] top-20 left-1/4"}>
            <Vactor2 />
          </div>
          <div className={"absolute w-[70px] bottom-20 right-1/4"}>
            <Vactor2 />
          </div>
        </div>
        <div className={"relative z-20"}>
          <TitleDescription
            title="میتونی به صورت آنلاین با سلام کار کنی 🚀"
            description="اولین زبان برنامه نویسی فارسی، اونم کاملا رایگان باورت میشه ؟"
          />
        </div>
        <Button
          text="بزن بریم"
          variant="buttonWhite"
          className={'w-full flex flex-row items-center gap-0.5 justify-center'}
          type="link"
          href="/404"
          icon={
            <span className="w-full h-full block">
              <ArrowLeftBlack className="scale-75 w-5 h-5 relative top-0.5" />
            </span>
          }
        />
      </div>
    </div>
  );
}

export default DescriptionOnlineCode;
