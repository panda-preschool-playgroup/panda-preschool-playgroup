import { FC } from "react";
import { Link } from "gatsby";

const FooterContent: FC = () => {
    return (
        <div className="bg-slate-600 text-slate-100">
            <div className="mx-auto w-full max-w-screen-xl md:grid md:grid-cols-3 md:gap-8 py-8 px-4">
                <div>
                    <p className="mb-4">
                        Howell Hall
                        <br />
                        School Lane
                        <br />
                        Copmanthorpe
                        <br />
                        York
                        <br />
                        YO23 3SQ
                    </p>
                    <p className="mb-4">07716 653801</p>
                    <a href="mailto:pandaplaygroup@hotmail.co.uk">pandaplaygroup@hotmail.co.uk</a>
                    <Separator />
                </div>
                <div className="mb-8 md:mb-0 text-base">
                    <p className="mb-4">Ofsted registration: RP905909</p>
                    <p className="mb-4">Registered charity no: 1035584</p>
                    <p className="mb-4">
                        <Link to="#">Policies</Link>
                    </p>
                    <p className="mb-4">
                        <Link to="#">Careers</Link>
                    </p>
                    <p>
                        <Link to="#">Privacy notice</Link>
                    </p>
                    <Separator />
                </div>
                <div className="text-base mb-12">
                    <p className="flex gap-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden
                        >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                        <a
                            href="https://www.facebook.com/pandascopmanthorpe/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Panda Playgroup Facebook Page"
                        >
                            Panda Playgroup
                        </a>{" "}
                        |{" "}
                        <a
                            href="https://www.facebook.com/Sticky-Mitts-20212022-112921877866920"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Sticky Mitts & Tiny Tots Facebook Page"
                        >
                            Sticky Mitts & Tiny Tots
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

const Separator = () => (
    <hr className="w-3/4 h-0.5 my-12 bg-slate-400 border-0 visible md:invisible md:w-0 md:h-0 md:my-0 " />
);

export default FooterContent;
