import React from "react";
import Socials from "../Socials";

const Footer = ({ contactRef }) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div ref={contactRef}>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            {/* <Button type="primary">Schedule a call</Button> */}
            <div className="mt-10">
              <Socials />
            </div>
            <div className="mt-10">
              <h1>Email: tthanhtung92@gmail.com</h1>
              <h1>Phone: 0986 950 563</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
