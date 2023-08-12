import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import ConsultationForm from "../consultation-form";
import { StoreUtil } from "@utils/store-util";
export const _FlyOutKey = "cnslfrmflyt";

// eslint-disable-next-line react/display-name
const ConsultationModal = forwardRef<{ handleClick: () => void }, {}>(
  (props, ref) => {
    useImperativeHandle(ref, () => ({
      handleClick,
    }));

    const [isShowing, setIsShowing] = useState(false);
    const [scrolledDown, setScrolledDown] = useState(false);

    const handleClick = () => {
      StoreUtil.saveSessionStore(_FlyOutKey, "r$3VdeQsnL#zwT@ylcbs");
      setIsShowing(!isShowing);
      document.body.classList.add("overflow-hidden");
      if (isShowing) {
        document.body.classList.remove("overflow-hidden");
      }
    };

    useEffect(() => {
      const handleScroll = () => {
        if (
          !StoreUtil.hasKeyInSession(_FlyOutKey) &&
          !scrolledDown &&
          window.scrollY > 1500
        ) {
          setIsShowing(!isShowing);
          document.body.classList.add("overflow-hidden");
          setScrolledDown(true);
        } else {
          document.body.classList.remove("overflow-hidden");
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [scrolledDown, isShowing]);

    return (
      <>
        <div className="request-btn">
          <button className="btn btn-request" onClick={handleClick}>
            <svg width="24" viewBox="0 0 24 24" fill="currentColor">
              <use href="/images/sprite.svg#svg-headphone"></use>
            </svg>
            <span>Request a Call Back</span>
          </button>
        </div>
        <div className={`app-modal ${isShowing ? "open" : ""}`}>
          <div className="w-full max-h-full">
            <div className="app-modal-body max-w-[600px] m-auto">
              <button className="app-modal-close" onClick={handleClick}>
                <svg width="13" viewBox="0 0 26 27" fill="white">
                  <use href="/images/sprite.svg#svg-close"></use>
                </svg>
              </button>
              <div className="form-box p-[16px] md:p-[30px] bg-[#013285]">
                <div className="app-form-text">
                  <h2 className="text-white !text-[16px] !font-[400] !pb-2">
                    Take Your First Step
                  </h2>
                  <h1 className="text-white pb-[12px] font-['Lato'] md:!text-[32px] md:!leading-[40px]">
                    Request A Free No-obligation <br /> Consultation Today!
                  </h1>
                </div>

                <ConsultationForm
                  formSubmitted={(status: boolean) => {
                    status && setIsShowing(false);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
);

export default ConsultationModal;

// interface OpenModalProps {
//   open(): void;
// }
// export const OpenModal = ({ open }: OpenModalProps) => {
//   return null;
// };

//   const [isShowing, setIsShowing] = useState(false);
//   const [scrolledDown, setScrolledDown] = useState(false);

//   const handleClick = () => {
//     StoreUtil.saveSessionStore(_FlyOutKey, "r$3VdeQsnL#zwT@ylcbs");
//     setIsShowing(!isShowing);
//     document.body.classList.add("overflow-hidden");
//     if (isShowing) {
//       document.body.classList.remove("overflow-hidden");
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         !StoreUtil.hasKeyInSession(_FlyOutKey) &&
//         !scrolledDown &&
//         window.scrollY > 1500
//       ) {
//         setIsShowing(!isShowing);
//         document.body.classList.add("overflow-hidden");
//         setScrolledDown(true);
//       } else {
//         document.body.classList.remove("overflow-hidden");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [scrolledDown, isShowing]);

//   return (
//     <>
//       <div className="request-btn">
//         <button className="btn btn-request" onClick={handleClick}>
//           <svg width="24" viewBox="0 0 24 24" fill="currentColor">
//             <use href="/images/sprite.svg#svg-headphone"></use>
//           </svg>
//           <span>Request a Call Back</span>
//         </button>
//       </div>
//       <div className={`app-modal ${isShowing ? "open" : ""}`}>
//         <div className="w-full max-h-full">
//           <div className="app-modal-body max-w-[600px] m-auto">
//             <button className="app-modal-close" onClick={handleClick}>
//               <svg width="13" viewBox="0 0 26 27" fill="white">
//                 <use href="/images/sprite.svg#svg-close"></use>
//               </svg>
//             </button>
//             <div className="form-box p-[16px] md:p-[30px] bg-[#013285]">
//               <div className="app-form-text">
//                 <h2 className="text-white !text-[16px] !font-[400] !pb-2">
//                   Take Your First Step
//                 </h2>
//                 <h1 className="text-white pb-[12px] font-['Lato'] md:!text-[32px] md:!leading-[40px]">
//                   Request A Free No-obligation <br /> Consultation Today!
//                 </h1>
//               </div>

//               <ConsultationForm
//                 formSubmitted={(status: boolean) => {
//                   status && setIsShowing(false);
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
