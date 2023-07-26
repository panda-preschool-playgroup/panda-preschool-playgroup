import { Link } from "gatsby";
import { Dropdown, Navbar } from "flowbite-react";
import { StaticImage } from "gatsby-plugin-image";
import { FC } from "react";

const Navigation: FC = () => {
    return (
        <Navbar
            fluid
            className="bg-yellow-light h-42"
            theme={{ inner: { base: "mx-3 flex flex-wrap items-center justify-between gap-y-5" } }}
        >
            <Navbar.Brand>
                <Link to="/" className="flex w-full items-center">
                    <StaticImage
                        src="../images/logo.png"
                        alt="Panda Pre-School Playgroup Logo"
                        width={125}
                        height={125}
                        className=" mr-12"
                    />
                    <span className="text-2xl md:text-3xl font-kg-second-chances">PANDA PRE-SCHOOL PLAYGROUP</span>
                </Link>
            </Navbar.Brand>
            <Navbar.Collapse className="font-kg-neatly-printed mx-2 order-1">
                <NavbarLink text="About us" href="#" />
                <NavbarLink text="Our setting" href="#" />
                <NavbarLink text="Sessions" href="#" />
                <Dropdown
                    inline
                    className="width-full"
                    label={
                        <li className="text-left w-full md:w-auto">
                            <p className="text-3xl font-bold md:border-0 py-2 pr-4 pl-3 md:p-0 border-b hover:text-cyan-dark">
                                Funding
                            </p>
                        </li>
                    }
                >
                    <Dropdown.Item className="text-3xl">
                        <Link to="#">Earnings</Link>
                    </Dropdown.Item>
                    <Dropdown.Item className="text-3xl">Settings</Dropdown.Item>
                    <Dropdown.Item className="text-3xl">Earnings</Dropdown.Item>
                </Dropdown>
            </Navbar.Collapse>
            <div className="flex md:order-2 w-full md:w-auto justify-between font-kg-neatly-printed">
                <Link to="#" className="text-white bg-cyan hover:bg-cyan-dark font-bold text-2xl rounded-lg px-6 py-4">
                    ADMISSIONS
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

interface NavbarLinkProps {
    text: string;
    href: string;
    active?: boolean;
}

const NavbarLink: FC<NavbarLinkProps> = ({ text, href, active }: NavbarLinkProps) => {
    let classes =
        "block py-2 pr-4 pl-3 md:p-0 border-b md:border-0 text-3xl font-bold hover:bg-transparent hover:text-cyan-dark";

    if (active) classes += " text-cyan";

    return (
        <li className="text-left w-full md:w-auto">
            <Link to={href} className={classes}>
                {text}
            </Link>
        </li>
    );
};

export default Navigation;
