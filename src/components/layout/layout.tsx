import { FC, PropsWithChildren } from "react";
import Navigation from "@/components/layout/navigation/navigation";

const globalStyles = "text-slate-700 font-quicksand";

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
        </>
    );
};

export default Layout;
