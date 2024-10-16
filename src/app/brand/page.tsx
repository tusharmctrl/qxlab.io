import React from "react";
import Qxlogo from "@/app/images/qx-labs.svg";
import Uxcx from "@/app/images/ux-cx.png";
import Perception from "@/app/images/perception.png";
import Negative from "@/app/images/negative.png";

export default function page() {
  return (
    <>
       <header className="px-5 xl:px-2.5 py-4 fixed w-full top-0 z-999 gradieant-header">
        <div className="container">
          <div className="w-full">
            <div className="flex items-center justify-between xl:justify-start">
              <a href="#" className="mr-11">
                <img src={Qxlogo.src} className="w-11 md:w-70px my-1" alt="qx-logo"/>
              </a>
              <button className="xl:hidden text-base text-white flex items-center gap-3">
                <span className="flex flex-col gap-y-1.5 relative"><span className="w-5 h-0.5 bg-white"></span><span className="w-5 h-0.5 bg-white"></span></span>Menu</button>
              <ul className="hidden xl:flex items-center gap-x-11">
                <li><a href="#" className="text-sm text-white font-semibold">Home</a></li>
                <li><a href="#" className="text-sm text-white font-semibold">Products</a></li>
                <li><a href="#" className="text-sm text-white font-semibold">QXc Services</a></li>
                <li className="relative group cursor-pointer">
                  <a href="#" className="text-sm text-white font-semibold  flex items-center gap-2">Solutions <span><svg className="w-3 h-2 fill-white" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" />
                  </svg>
                  </span>
                  </a>
                  <ul className="opacity-0 invisible group-hover:opacity-100 group-hover:visible flex flex-col gap-y-9 w-64 min-w-64 rounded-lg absolute top-8 left-0 bg-dark-slate-gray p-6">
                    <li>
                      <a href="#" className="text-sm text-white font-semibold">For Brands</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-white font-semibold">For Enterprise</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-white font-semibold">Industries</a>
                    </li>
                  </ul>
                  </li>
                  <li className="relative group cursor-pointer"><a href="#" className="text-sm text-white font-semibold  flex items-center gap-2">Resources <span><svg className="w-3 h-2 fill-white" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" />
                  </svg>
                  </span>
                  </a>
                  <ul className="opacity-0 invisible group-hover:opacity-100 group-hover:visible flex flex-col gap-y-9 w-64 min-w-64 rounded-lg absolute top-8 left-0 bg-dark-slate-gray p-6">
                    <li>
                      <a href="#" className="text-sm text-white font-semibold">Case Studies</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-white font-semibold">About Us</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-white font-semibold">Blog</a>
                    </li>
                  </ul>
                  </li>               
              </ul>
            </div>
          </div>
        </div>
    </header>
    
    {/* Our Services */}
    <div className="p-5 mt-24 py-10 lg:py-14">
      <div className="container mb-8 md:mb-10 lg:mb-12 2xl::mb-28">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl xl:text-7xl font-semibold text-white text-center">Who QXi Helps</h2>
          <div className="max-w-4xl mx-auto ">
            <p className="text-base md:text-lg font-medium text-white text-center">We are delighted to present to you the QXI - our AI-powered insight tool that offers a comprehensive analysis of your business and its competitors. Our goal is to empower you with the knowledge you need to stay ahead in your industry.</p>
          </div>
        </div>
      </div>
    </div>
    {/* ====== Qxi ====== */}
    <section className="p-5 pb-20 lg:pb-32 2xl:pb-48">
      <div className="container space-y-20 lg:space-y-24 2xl:space-y-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 lg:gap-24 2xl:gap-40">
          <div className="relative rounded-2xl overflow-hidden">
            <img src={Uxcx.src} alt="Uxcx" className="w-full"/>
          </div>
          <div className="relative">
            <div className="mb-7 lg:mb-10 w-14 h-14 flex items-center justify-center relative">
                <span className="gradient-blue absolute w-14 h-14 top-0 left-0 inline-flex  justify-center items-center rounded-full"></span>
                <svg className="w-7 h-7" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.3326 29.5834C17.9779 29.5834 17.6809 29.4637 17.4416 29.2244C17.2023 28.9851 17.0826 28.6881 17.0826 28.3334C17.0826 27.9787 17.2023 27.6817 17.4416 27.4424C17.6809 27.2031 17.9779 27.0834 18.3326 27.0834C19.777 27.0834 21.0409 26.7944 22.1243 26.2164C23.2076 25.6384 23.7493 24.9552 23.7493 24.1667C23.7493 23.6176 23.4886 23.1176 22.9672 22.6667C22.4458 22.2158 21.7161 21.8355 20.7781 21.5256L22.6594 19.6603C23.7941 20.156 24.676 20.781 25.3053 21.5353C25.9346 22.2896 26.2492 23.1667 26.2492 24.1667C26.2492 25.8718 25.417 27.2009 23.7524 28.1539C22.0879 29.1069 20.2813 29.5834 18.3326 29.5834ZM3.55384 17.1699C2.54529 16.7084 1.77018 16.1598 1.22851 15.5241C0.686849 14.8884 0.416016 14.1582 0.416016 13.3334C0.416016 12.2843 0.825196 11.3879 1.64355 10.6443C2.46194 9.90071 3.94484 9.05884 6.09226 8.11867C7.87432 7.31311 9.04046 6.71321 9.59068 6.31896C10.1409 5.92474 10.416 5.4851 10.416 5.00004C10.416 4.43807 10.0971 3.95035 9.45926 3.53688C8.82143 3.1234 7.89033 2.91667 6.66597 2.91667C5.92878 2.91667 5.28668 3.01603 4.73968 3.21475C4.19265 3.41347 3.70866 3.72331 3.28772 4.14425C3.05697 4.37503 2.77814 4.51018 2.45122 4.54971C2.1243 4.58924 1.82303 4.49896 1.54739 4.27888C1.27175 4.06521 1.11416 3.79224 1.07464 3.45996C1.03511 3.12771 1.13073 2.82377 1.36151 2.54813C1.83587 1.95199 2.55275 1.44772 3.51214 1.03533C4.47153 0.622942 5.5228 0.416748 6.66597 0.416748C8.52708 0.416748 10.034 0.838748 11.1867 1.68275C12.3395 2.52678 12.9159 3.63254 12.9159 5.00004C12.9159 6.00857 12.5238 6.91402 11.7396 7.71638C10.9554 8.51871 9.40528 9.41561 7.08905 10.4071C5.4245 11.1229 4.31285 11.6849 3.7541 12.093C3.19532 12.5011 2.91593 12.9146 2.91593 13.3334C2.91593 13.6902 3.13175 14.0348 3.56339 14.3671C3.99503 14.6993 4.62218 15.0086 5.44484 15.295L3.55384 17.1699ZM25.8871 11.2596L20.1981 5.57059L21.8038 3.96484C22.3529 3.4157 22.9966 3.13845 23.7348 3.13308C24.4731 3.12775 25.1082 3.39965 25.6403 3.94879L27.5088 5.81734C28.058 6.34939 28.3299 6.98453 28.3245 7.72275C28.3192 8.461 28.0419 9.1047 27.4928 9.65384L25.8871 11.2596ZM4.85505 26.6026H6.98005L19.7493 13.8334L17.6243 11.7084L4.85505 24.4776V26.6026ZM2.35514 29.1026V23.4136L17.6243 8.14434L23.3133 13.8334L8.04414 29.1026H2.35514Z" fill="#6F36EA"/>
                </svg>
            </div>
            <h4 className="mb-3 lg:mb-5 text-2xl md:text-3xl font-semibold text-white">UX/CX Researchers</h4>
            <p className="text-white text-sm font-medium leading-2em">Save £000s and hours on manual research and insight. QXi is essential for UX/CX researchers, offering immediate insights fromover 400 industry and journey specific data points. QXi helps uncover pain points and opportunties ensuring your digital presence is optimized and competitive.</p>
          </div>
        </div>
        {/* ==== 02 ==== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 lg:gap-24 2xl:gap-40">
        <div className="relative order-2 lg:order-1">
            <div className="mb-7 lg:mb-10 w-14 h-14 flex items-center justify-center relative ">
                <span className="gradient-marker absolute w-14 h-14 top-0 left-0 inline-flex  justify-center items-center rounded-full"></span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 27 29" fill="none"><path d="M6.17706 22.5132H16.1978V20.0494H6.17706V22.5132ZM6.17706 15.9429H20.8228V13.4791H6.17706V15.9429ZM6.17706 9.37253H20.8228V6.90873H6.17706V9.37253ZM3.18268 28.6729C2.40394 28.6729 1.74477 28.3855 1.20519 27.8106C0.665605 27.2357 0.395813 26.5334 0.395813 25.7036V3.71833C0.395813 2.8886 0.665605 2.18629 1.20519 1.61138C1.74477 1.03648 2.40394 0.749023 3.18268 0.749023H23.8172C24.5959 0.749023 25.2551 1.03648 25.7947 1.61138C26.3343 2.18629 26.6041 2.8886 26.6041 3.71833V25.7036C26.6041 26.5334 26.3343 27.2357 25.7947 27.8106C25.2551 28.3855 24.5959 28.6729 23.8172 28.6729H3.18268ZM3.18268 26.2091H23.8172C23.9358 26.2091 24.0445 26.1565 24.1434 26.0512C24.2422 25.9459 24.2916 25.83 24.2916 25.7036V3.71833C24.2916 3.59196 24.2422 3.47612 24.1434 3.3708C24.0445 3.26551 23.9358 3.21286 23.8172 3.21286H3.18268C3.06408 3.21286 2.95535 3.26551 2.85651 3.3708C2.75768 3.47612 2.70827 3.59196 2.70827 3.71833V25.7036C2.70827 25.83 2.75768 25.9459 2.85651 26.0512C2.95535 26.1565 3.06408 26.2091 3.18268 26.2091Z" fill="#B18D0C"></path></svg>
            </div>
            <h4 className="mb-3 lg:mb-5 text-2xl md:text-3xl font-semibold text-white">Marketers</h4>
            <p className="text-white text-sm font-medium leading-2em">Marketers gain valuable insight in to their brands web/app performance metrics, SEO capabilities, and a view on customer sentiment and conversation with QXi – immediately bencmarked against their competition. This allows marketers to learn from their industry, optimize campaigns, improve ROI, and build a stronger brand image.</p>
          </div>
          <div className="relative rounded-2xl overflow-hidden order-1 lg:order-2">
            <img src={Perception.src} alt="Perception" className="w-full"/>
          </div>
          
        </div>
        {/* ==== 03 ==== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 lg:gap-24 2xl:gap-40">
          <div className="relative rounded-2xl overflow-hidden">
            <img src={Negative.src} alt="Uxcx" className="w-full"/>
          </div>
          <div className="relative">
            <div className="mb-10 w-14 h-14 flex items-center justify-center relative">
                <span className="gradient-product absolute w-14 h-14 top-0 left-0 inline-flex  justify-center items-center rounded-full"></span>
               <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 35 35" fill="none"><path d="M17.5 34.5207C15.1662 34.5207 12.964 34.0734 10.8932 33.1787C8.82249 32.284 7.01646 31.066 5.47514 29.5247C3.93386 27.9834 2.71589 26.1774 1.82122 24.1066C0.926521 22.0359 0.479172 19.8337 0.479172 17.4999C0.479172 15.1478 0.926521 12.9409 1.82122 10.8794C2.71589 8.81784 3.93386 7.01641 5.47514 5.4751C7.01646 3.93382 8.82249 2.71584 10.8932 1.82117C12.964 0.926475 15.1662 0.479126 17.5 0.479126C19.8521 0.479126 22.0589 0.926475 24.1205 1.82117C26.182 2.71584 27.9835 3.93382 29.5248 5.4751C31.0661 7.01641 32.284 8.81784 33.1787 10.8794C34.0734 12.9409 34.5208 15.1478 34.5208 17.4999C34.5208 19.8337 34.0734 22.0359 33.1787 24.1066C32.284 26.1774 31.0661 27.9834 29.5248 29.5247C27.9835 31.066 26.182 32.284 24.1205 33.1787C22.0589 34.0734 19.8521 34.5207 17.5 34.5207ZM17.5 31.7954C18.4142 30.5825 19.1837 29.3593 19.8085 28.1258C20.4333 26.8923 20.9421 25.544 21.3348 24.0808H13.6651C14.0808 25.5899 14.5954 26.9613 15.2087 28.1948C15.822 29.4283 16.5857 30.6285 17.5 31.7954ZM14.0304 31.3026C13.3436 30.3172 12.7268 29.1969 12.1801 27.9415C11.6334 26.6862 11.2085 25.3993 10.9053 24.0808H4.82732C5.77371 25.9414 7.04282 27.5046 8.63466 28.7702C10.2265 30.0359 12.0251 30.88 14.0304 31.3026ZM20.9695 31.3026C22.9748 30.88 24.7734 30.0359 26.3653 28.7702C27.9571 27.5046 29.2262 25.9414 30.1726 24.0808H24.0946C23.734 25.4108 23.2803 26.7034 22.7336 27.9588C22.1869 29.2141 21.5989 30.3287 20.9695 31.3026ZM3.70068 21.3934H10.3609C10.2483 20.7272 10.1668 20.0743 10.1163 19.4346C10.0658 18.7949 10.0405 18.15 10.0405 17.4999C10.0405 16.8499 10.0658 16.205 10.1163 15.5652C10.1668 14.9255 10.2483 14.2726 10.3609 13.6064H3.70068C3.52841 14.2152 3.39633 14.848 3.30445 15.5049C3.21257 16.1619 3.16663 16.8269 3.16663 17.4999C3.16663 18.173 3.21257 18.8379 3.30445 19.4949C3.39633 20.1518 3.52841 20.7847 3.70068 21.3934ZM13.0483 21.3934H21.9516C22.0641 20.7272 22.1457 20.0801 22.1962 19.4518C22.2468 18.8236 22.272 18.173 22.272 17.4999C22.272 16.8269 22.2468 16.1762 22.1962 15.548C22.1457 14.9198 22.0641 14.2726 21.9516 13.6064H13.0483C12.9358 14.2726 12.8542 14.9198 12.8037 15.548C12.7532 16.1762 12.7279 16.8269 12.7279 17.4999C12.7279 18.173 12.7532 18.8236 12.8037 19.4518C12.8542 20.0801 12.9358 20.7272 13.0483 21.3934ZM24.639 21.3934H31.2992C31.4715 20.7847 31.6036 20.1518 31.6955 19.4949C31.7874 18.8379 31.8333 18.173 31.8333 17.4999C31.8333 16.8269 31.7874 16.1619 31.6955 15.5049C31.6036 14.848 31.4715 14.2152 31.2992 13.6064H24.639C24.7516 14.2726 24.8331 14.9255 24.8836 15.5652C24.9342 16.205 24.9594 16.8499 24.9594 17.4999C24.9594 18.15 24.9342 18.7949 24.8836 19.4346C24.8331 20.0743 24.7516 20.7272 24.639 21.3934ZM24.0946 10.919H30.1726C29.2147 9.03545 27.9542 7.47231 26.3911 6.22961C24.828 4.98694 23.0208 4.13705 20.9695 3.67994C21.6563 4.72278 22.2673 5.86325 22.8025 7.10135C23.3378 8.33945 23.7685 9.61201 24.0946 10.919ZM13.6651 10.919H21.3348C20.9191 9.42138 20.3959 8.04144 19.7654 6.77921C19.1349 5.51701 18.3797 4.32543 17.5 3.20448C16.6202 4.32543 15.8651 5.51701 15.2345 6.77921C14.604 8.04144 14.0808 9.42138 13.6651 10.919ZM4.82732 10.919H10.9053C11.2315 9.61201 11.6622 8.33945 12.1974 7.10135C12.7326 5.86325 13.3436 4.72278 14.0304 3.67994C11.9677 4.13705 10.1576 4.98983 8.60022 6.23826C7.04284 7.48669 5.78521 9.04695 4.82732 10.919Z" fill="#5077DE"></path></svg>
            </div>
            <h4 className="mb-5 text-2xl md:text-3xl font-semibold text-white">Product Managers</h4>
            <p className="text-white text-sm font-medium leading-2em">QXi helps product managers assess usability, accessibility, perception and performance, ensuring their products are meeting user needs. With actionable recommendations and continuous monitoring, QXi enhances user retention and satisfaction. Data-driven insights inform product development and provide a competitive edge.</p>
          </div>
        </div>
      </div>
    </section>
    
    <footer className="bg-charleston-green/50 py-12 lg:py-20 px-5">
      <div className="container ">
        <div className="flex flex-col justify-center items-center space-y-5 lg:space-y-8">
          <a href="#">
            <img src={Qxlogo.src} alt="qxlogo"/>
          </a>
          <ul className="flex items-center gap-4 md:gap-10">
            <li><a href="#" className="text-sm md:text-base text-white/45 font-medium">About Us</a></li>
            <li><a href="#" className="text-sm md:text-base text-white/45 font-medium">Privacy&Cookie Statement</a></li>
            <li><a href="#" className="text-sm md:text-base text-white/45 font-medium">Investors</a></li>
          </ul>
          <p className="text-sm text-white/45 font-light">© 2024 QX Lab Ltd | Company Number  <span className="font-semibold">15727970</span></p>
        </div>
        
      </div>
      
    </footer>
    </>
  );
}
