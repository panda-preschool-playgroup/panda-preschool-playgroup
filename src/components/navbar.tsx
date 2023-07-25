import { Link } from "gatsby";
import { Navbar } from "flowbite-react";
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
                <StaticImage
                    src="../images/logo.png"
                    alt="Panda Pre-School Playgroup Logo"
                    width={125}
                    height={125}
                    className=" mr-12"
                />
                <span className="text-2xl md:text-3xl font-kg-second-chances">PANDA PRE-SCHOOL PLAYGROUP</span>
            </Navbar.Brand>
            <div className="flex md:order-2 w-full md:w-auto justify-between font-kg-neatly-printed">
                <Link to="#" className="text-white bg-cyan hover:bg-cyan-dark font-bold text-2xl rounded-lg px-8 py-4">
                    APPLY
                </Link>
                <Navbar.Toggle className="hover:bg-cyan-dark hover:text-white" />
            </div>
            <Navbar.Collapse className="font-kg-neatly-printed mx-2">
                <NavbarLink active text="Home" href="#" />
                <NavbarLink text="Our setting" href="#" />
                <NavbarLink text="Sessions" href="#" />
                <NavbarLink text="About us" href="#" />
                <NavbarLink text="Funding" href="#" />
            </Navbar.Collapse>
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
        "text-3xl font-bold md:hover:bg-transparent md:hover:text-cyan-dark hover:bg-cyan-dark hover:text-white";
    if (active) classes += " md:text-cyan md:bg-transparent bg-cyan text-white";

    return (
        <Navbar.Link href={href} className={classes}>
            {text}
        </Navbar.Link>
    );
};

export default Navigation;
