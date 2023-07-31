import { FC, PropsWithChildren } from "react";
import Navigation from "@/components/layout/header/navigation";
import FooterContent from "@/components/layout/footer/footer-content";
import SiteBanner from "@/components/layout/footer/hosting-banner";

const globalStyles = "bg-gray-100 text-slate-700 text-xl font-quicksand w-full";

interface LayoutProps {
    activeSection?: string;
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ activeSection, children }: PropsWithChildren<LayoutProps>) => {
    return (
        <>
            <header className={globalStyles}>
                <Navigation activeSection={activeSection} />
            </header>
            <main className={globalStyles}>{children}</main>
            <footer className={globalStyles}>
                <FooterContent />
                <SiteBanner />
            </footer>
        </>
    );
};

export default Layout;
