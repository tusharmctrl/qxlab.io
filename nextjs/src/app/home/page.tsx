import React from "react";

export default function page({ params }: { params: { slug: string } }) {
  console.log("params", params);

  const { slug } = params;

  return (
    <>
      <section className="relative -mt-14 p-5">
        <div className="container">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="space-y-1 rounded-2xl bg-slate-gray/60 p-6 md:p-9">
              <span className="text-base font-semibold text-waterspout">QXi</span>
              <h5 className="text-2xl font-semibold text-white">
                Automated
                <br /> Benchmarking
              </h5>
              <p className="text-base leading-8 text-cultured">
                Measure and improve the quality of your digital experiences with instant insight, analysis and recommendations.
              </p>
              <a href="#" className="text-base font-normal text-maximum-blue-green">
                LearnMore
              </a>
            </div>
            <div className="space-y-1 rounded-2xl bg-slate-gray/60 p-6 md:p-9">
              <span className="text-base font-semibold text-waterspout">QXi</span>
              <h5 className="text-2xl font-semibold text-white">
                Customer Experience <br /> Consultancy
              </h5>
              <p className="text-base leading-8 text-cultured">
                Advance your Customer Experience programme through Fractional Leadership or Project Based initiatives.
              </p>
              <a href="#" className="text-base font-normal text-maximum-blue-green">
                LearnMore
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper mt-2.5 overflow-hidden p-5 lg:p-12">
        <div className="qx-marquee">
          <ul className="flex items-center">
            <li className="mx-10 inline-block min-w-20 cursor-pointer whitespace-nowrap lg:mx-16 lg:min-w-28">
              <img className="w-20" src="/images/fosh-tech.png" alt="foshtech" />
            </li>
            <li className="mx-10 inline-block min-w-20 cursor-pointer whitespace-nowrap lg:mx-16 lg:min-w-28">
              <img className="w-12" src="/images/dazn.png" alt="dazn" />
            </li>
            <li className="mx-10 inline-block min-w-20 cursor-pointer whitespace-nowrap lg:mx-16 lg:min-w-28">
              <img className="w-20" src="/images/betfair.png" alt="Betfair" />
            </li>
            <li className="mx-10 inline-block min-w-20 cursor-pointer whitespace-nowrap lg:mx-16 lg:min-w-28">
              <img className="w-20" src="/images/igt.png" alt="Igt" />
            </li>
            <li className="mx-10 inline-block min-w-20 cursor-pointer whitespace-nowrap lg:mx-16 lg:min-w-28">
              <img className="w-20" src="/images/playtech.png" alt="Playtech" />
            </li>
            <li className="mx-10 inline-block min-w-20 cursor-pointer whitespace-nowrap lg:mx-16 lg:min-w-28">
              <img className="w-20" src="/images/markor.png" alt="Markor" />
            </li>
            <li className="mx-10 inline-block min-w-20 cursor-pointer whitespace-nowrap lg:mx-16 lg:min-w-28">
              <img className="w-20" src="/images/fosh-tech.png" alt="foshtech" />
            </li>
            <li className="mx-10 inline-block min-w-20 cursor-pointer whitespace-nowrap lg:mx-16 lg:min-w-28">
              <img className="w-12" src="/images/dazn.png" alt="dazn" />
            </li>
            <li className="mx-10 inline-block min-w-20 cursor-pointer whitespace-nowrap lg:mx-16 lg:min-w-28">
              <img className="w-20" src="/images/betfair.png" alt="Betfair" />
            </li>
            <li className="mx-10 inline-block min-w-20 cursor-pointer whitespace-nowrap lg:mx-16 lg:min-w-28">
              <img className="w-20" src="/images/igt.png" alt="Igt" />
            </li>
            <li className="mx-10 inline-block min-w-20 cursor-pointer whitespace-nowrap lg:mx-16 lg:min-w-28">
              <img className="w-20" src="/images/playtech.png" alt="Playtech" />
            </li>
            <li className="mx-10 inline-block min-w-20 cursor-pointer whitespace-nowrap lg:mx-16 lg:min-w-28">
              <img className="w-20" src="/images/markor.png" alt="Markor" />
            </li>
            <li className="mx-10 inline-block min-w-20 cursor-pointer whitespace-nowrap lg:mx-16 lg:min-w-28">
              <img className="w-20" src="/images/fosh-tech.png" alt="foshtech" />
            </li>
            <li className="mx-10 inline-block min-w-20 cursor-pointer whitespace-nowrap lg:mx-16 lg:min-w-28">
              <img className="w-12" src="/images/dazn.png" alt="dazn" />
            </li>
            <li className="mx-10 inline-block min-w-20 cursor-pointer whitespace-nowrap lg:mx-16 lg:min-w-28">
              <img className="w-20" src="/images/betfair.png" alt="Betfair" />
            </li>
            <li className="mx-10 inline-block min-w-20 cursor-pointer whitespace-nowrap lg:mx-16 lg:min-w-28">
              <img className="w-20" src="/images/igt.png" alt="Igt" />
            </li>
            <li className="mx-10 inline-block min-w-20 cursor-pointer whitespace-nowrap lg:mx-16 lg:min-w-28">
              <img className="w-20" src="/images/playtech.png" alt="Playtech" />
            </li>
            <li className="mx-10 inline-block min-w-20 cursor-pointer whitespace-nowrap lg:mx-16 lg:min-w-28">
              <img className="w-20" src="/images/markor.png" alt="Markor" />
            </li>
          </ul>
        </div>
      </div>

      <section className="px-5 py-5 pb-5 lg:pt-14">
        <div className="container">
          <div className="flex flex-wrap items-start gap-y-4 lg:gap-y-6">
            <div className="w-full p-2.5 lg:w-1/2">
              <div className="max-w-488px space-y-4 lg:space-y-7">
                <h2 className="text-40px font-medium text-white">Contact</h2>
                <div className="flex flex-col">
                  <a href="#" className="text-xl font-normal text-cultured">
                    QxLab Ltd.
                  </a>
                  <a href="#" className="text-sm font-normal text-eucalyptus">
                    Company no:15727970
                  </a>
                </div>
                <ul className="flex flex-wrap items-center gap-4">
                  <li>
                    <a href="#">
                      <img src="/images/Linkedin.svg" className="w-12" alt="linkdin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/images/Facebook.svg" className="w-12" alt="facebook" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-2.5 lg:w-1/2">
              <div className="relative">
                <form className="">
                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-medium text-cultured">Name</label>
                    <input
                      type="password"
                      className="block w-full rounded-md !bg-white/5 p-13px text-sm font-medium text-white/50 focus:outline-0 focus:ring-0"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label id="email" className="mb-2 block text-sm font-medium text-cultured">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="block w-full rounded-md !bg-white/5 p-3.5 text-sm font-medium text-white/50 focus:outline-0 focus:ring-0"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-medium text-cultured">Subject</label>
                    <select className="block w-full rounded-md !bg-white/5 p-3.5 text-sm font-medium text-white/50 focus:outline-0 focus:ring-0">
                      <option className="text-sm font-medium text-black" selected>
                        Choose a country
                      </option>
                      <option className="text-sm font-medium text-black" value="US">
                        United States
                      </option>
                      <option className="text-sm font-medium text-black" value="CA">
                        Canada
                      </option>
                      <option className="text-sm font-medium text-black" value="FR">
                        France
                      </option>
                      <option className="text-sm font-medium text-black" value="DE">
                        Germany
                      </option>
                    </select>
                  </div>
                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-medium text-cultured">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="block w-full rounded-md !bg-white/5 p-3 text-sm font-medium text-white/50 focus:outline-0 focus:ring-0"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full rounded-lg bg-pastel-green px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-0">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
