import { FC, PropsWithChildren } from "react";
import Navigation from "@/components/layout/header/navigation";
import Breadcrumb from "@/components/layout/header/breadcrumb";
import FooterContent from "@/components/layout/footer/footer-content";
import SiteBanner from "@/components/layout/footer/hosting-banner";
import { Link } from "gatsby";

interface LayoutProps {
    activeSection?: string;
    pageHeading?: string;
    showHomeLink?: boolean;
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
    activeSection,
    pageHeading,
    showHomeLink,
    children,
}: PropsWithChildren<LayoutProps>) => {
    return (
        <div className="flex justify-center bg-slate-100 text-slate-800 text-xl font-quicksand">
            <div className="w-[1920px]">
                <header>
                    <Navigation activeSection={activeSection} />
                    {activeSection && pageHeading && <Breadcrumb activeSection={activeSection} current={pageHeading} />}
                </header>
                <main>
                    {children}
                    {showHomeLink && (
                        <div className="pb-24 2xl:px-64 lg:px-48 md:px-24 px-12">
                            <Link to="/">Back to home</Link>
                        </div>
                    )}
                </main>
                <footer>
                    <FooterContent />
                    <SiteBanner />
                </footer>
            </div>
        </div>
    );
};

export default Layout;
