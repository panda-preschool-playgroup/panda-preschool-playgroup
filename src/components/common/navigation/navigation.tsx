import { FC } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Navbar } from "flowbite-react";
import NavigationSection from "@/components/common/navigation/navigation-section";
import NavigationItem from "@/components/common/navigation/navigation-item";

const Navigation: FC = () => {
    return (
        <Navbar
            fluid
            className="bg-yellow-light h-42"
            theme={{ inner: { base: "mx-3 flex flex-wrap items-center justify-between gap-y-5 gap-x-5" } }}
        >
            <Navbar.Brand>
                <Link to="/" className="flex w-full items-center gap-x-10">
                    <StaticImage
                        src="../../../images/logo.png"
                        alt="Panda Pre-School Playgroup Logo"
                        width={125}
                        height={125}
                    />
                    <span className="text-2xl md:text-3xl font-kg-second-chances">PANDA PRE-SCHOOL PLAYGROUP</span>
                </Link>
            </Navbar.Brand>
            <Navbar.Collapse className="order-1">
                <NavigationSection
                    title="Sessions"
                    menuItems={[
                        { title: "Playgroup", href: "#" },
                        { title: "Sticky Mitts & Tiny Tots", href: "#" },
                    ]}
                />
                <NavigationSection
                    title="New starters"
                    menuItems={[
                        { title: "Settling in", href: "#" },
                        { title: "Prospectus", href: "#" },
                        { title: "Fees", href: "#" },
                        { title: "Policies", href: "#" },
                    ]}
                />
                <NavigationSection
                    title="Our team"
                    menuItems={[
                        { title: "Staff", href: "#" },
                        { title: "Committee", href: "#" },
                    ]}
                />
                <NavigationSection
                    title="Funding"
                    menuItems={[
                        { title: "Charitable framework", href: "#" },
                        { title: "Fundraising", href: "#" },
                        { title: "Panda pals", href: "#" },
                    ]}
                />
                <NavigationItem text="Contact" href="#" />
            </Navbar.Collapse>
            <div className="flex md:order-2 w-full md:w-auto justify-between">
                <Link to="#" className="text-white bg-cyan hover:bg-cyan-dark font-bold text-lg rounded-lg px-6 py-4">
                    APPLY
                </Link>
                <Navbar.Toggle
                    theme={{
                        base: "inline-flex items-center text-gray-500 focus:text-gray-600 hover:text-gray-600 text-sm md:hidden",
                    }}
                />
            </div>
        </Navbar>
    );
};

export default Navigation;
