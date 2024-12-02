import { FC, Fragment } from "react";
import { Link } from "gatsby";
import { useFooterContent } from "@/queries/layout/footer/use-footer-content";

const FooterContent: FC = () => {
    const footerContent: Queries.ContentfulFooter = useFooterContent();

    return (
        <div className="bg-slate-600 text-slate-100">
            <div className="mx-auto w-full max-w-screen-xl lg:grid lg:grid-cols-3 lg:gap-8 py-8 px-4 lg:px-24 xl:px-4">
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
                    <p className="mb-4">{footerContent.phoneNumber}</p>
                    <a href={`mailto:${footerContent.emailAddress}`}>{footerContent.emailAddress}</a>
                    <Separator />
                </div>
                <div className="mb-8 md:mb-0 text-base">
                    <p className="mb-4">Ofsted registration: 2810800</p>
                    <p className="mb-4">Registered charity no: 1209013</p>
                    <p className="mb-4">Member of the Early Years Alliance</p>
                    <p className="mb-4">
                        <Link to="/vacancies">Vacancies</Link>
                    </p>
                    <p>
                        <Link to="/privacy-notice">Privacy notice</Link>
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
                        {footerContent.facebookLinks?.map(
                            (facebookLink: Queries.Maybe<Queries.ContentfulLink>, index: number) => (
                                <Fragment key={facebookLink?.contentful_id}>
                                    {index ? " | " : ""}
                                    <a
                                        href={facebookLink?.url ?? ""}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`${facebookLink?.text} Facebook Page`}
                                    >
                                        {facebookLink?.text}
                                    </a>
                                </Fragment>
                            ),
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
};

const Separator = () => (
    <hr className="w-3/4 h-0.5 my-12 bg-slate-400 border-0 visible md:invisible lg:w-0 lg:h-0 lg:my-0 " />
);

export default FooterContent;
