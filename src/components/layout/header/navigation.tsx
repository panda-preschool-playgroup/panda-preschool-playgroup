import { FC } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Navbar } from "flowbite-react";
import NavigationSection from "@/components/layout/header/navigation-section";
import LinkButton from "@/components/common/link-button";
import { useProspectus } from "@/queries/layout/header/use-prospectus";

interface NavigationProps {
    activeSection?: string;
}

const Navigation: FC<NavigationProps> = ({ activeSection }: NavigationProps) => {
    const prospectus = useProspectus();

    return (
        <Navbar
            fluid
            className="border-b-4 border-green h-42"
            theme={{ inner: { base: "mx-3 flex flex-wrap items-center justify-between gap-y-5 gap-x-5 xl:pb-0 pb-4" } }}
        >
            <Navbar.Brand as="div">
                <Link to="/" className="flex items-center w-full gap-x-10 no-underline">
                    <StaticImage src="../../../images/logo.png" alt="" aria-hidden width={125} height={125} />
                    <h1 className="font-sofia-pro-soft-bold text-2xl sm:text-3xl md:text-4xl">Panda Playgroup</h1>
                </Link>
            </Navbar.Brand>
            <Navbar.Collapse className="order-1">
                <NavigationSection
                    title="Sessions"
                    menuItems={[
                        { title: "Our pre-school", href: "/sessions/pre-school" },
                        { title: "Sticky Mitts and Tiny Tots", href: "/sessions/sticky-mitts-tiny-tots" },
                    ]}
                    activeSection={activeSection}
                />
                <NavigationSection
                    title="New Pandas"
                    menuItems={[
                        { title: "Settling in", href: "/new-pandas/settling-in" },
                        { title: "Prospectus", href: prospectus?.publicUrl ?? "#", isExternal: true },
                        { title: "Fees", href: "/new-pandas/fees" },
                        { title: "Policies", href: "#" },
                    ]}
                    activeSection={activeSection}
                />
                <NavigationSection
                    title="Our approach"
                    menuItems={[
                        { title: "Mission statement", href: "#" },
                        { title: "Green Panda", href: "#" },
                    ]}
                    activeSection={activeSection}
                />
                <NavigationSection
                    title="Funding"
                    menuItems={[
                        { title: "Charitable framework", href: "#" },
                        { title: "Fundraising", href: "#" },
                        { title: "Panda Pals", href: "#" },
                    ]}
                    activeSection={activeSection}
                />
                <NavigationSection
                    title="Our team"
                    menuItems={[
                        { title: "Staff", href: "#" },
                        { title: "Committee", href: "#" },
                    ]}
                    activeSection={activeSection}
                />
                <NavigationSection title="Contact us" href="/" />
            </Navbar.Collapse>
            <div className="flex md:order-2 w-full md:w-auto justify-between">
                <LinkButton text="Apply" href="#" />
                <Navbar.Toggle
                    theme={{
                        base: "inline-flex items-center hover:text-green-light text-sm md:hidden",
                    }}
                />
            </div>
        </Navbar>
    );
};

export default Navigation;
