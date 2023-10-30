import { FC, PropsWithChildren } from "react";
import Navigation from "@/components/layout/header/navigation";
import Breadcrumb from "@/components/layout/header/breadcrumb";
import FooterContent from "@/components/layout/footer/footer-content";
import SiteBanner from "@/components/layout/footer/hosting-banner";

interface LayoutProps {
    activeSection?: string;
    pageHeading?: string;
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
    activeSection,
    pageHeading,
    children,
}: PropsWithChildren<LayoutProps>) => {
    return (
        <div className="flex justify-center bg-slate-100 text-slate-800 text-xl font-quicksand">
            <div className="max-w-[1920px]">
                <header>
                    <Navigation activeSection={activeSection} />
                    {activeSection && pageHeading && <Breadcrumb activeSection={activeSection} current={pageHeading} />}
                </header>
                <main>{children}</main>
                <footer>
                    <FooterContent />
                    <SiteBanner />
                </footer>
            </div>
        </div>
    );
};

export default Layout;
