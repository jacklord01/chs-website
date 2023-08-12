import AppConst from "@config/app.const";
import Image from "next/image";

interface IeuGrantsProps {
  title: string;
  htmlContent: string;
}

const IeuGrants: React.FC<IeuGrantsProps> = ({
  title,
  htmlContent,
}: IeuGrantsProps) => {
  return (
    <div className="ieu-grants">
      <div className="container mx-auto px-[16px]">
        <div className="title text-center pb-[45px]">
          <h1 className="!m-0">{title}</h1>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-6 md:col-span-3">
            <div className="ieu-grants-img">
              <Image
                src={AppConst.assetsBaseUrl + "seai-grant/house.webp"}
                className="w-full h-auto"
                alt="House Type"
                loading="lazy"
                width={585}
                height={646}
                quality={100}
              />
            </div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="ieu-grants-cont">
              <div
                className="ieu-grants-sub-cont"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IeuGrants;
