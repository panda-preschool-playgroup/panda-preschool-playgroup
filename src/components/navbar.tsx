import { Button, Navbar } from "flowbite-react";
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
                <Button size="xl" className="bg-green-dark">
                    <span className="text-2xl font-bold text-white">APPLY</span>
                </Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className="font-kg-neatly-printed mx-2">
                <Link active text="Home" href="#" />
                <Link text="Our setting" href="#" />
                <Link text="Sessions" href="#" />
                <Link text="About us" href="#" />
                <Link text="Funding" href="#" />
            </Navbar.Collapse>
        </Navbar>
    );
};

interface LinkProps {
    text: string;
    href: string;
    active?: boolean;
}

const Link: FC<LinkProps> = ({ text, href, active }: LinkProps) => {
    return (
        <Navbar.Link {...(active && { active })} href={href} className="text-3xl font-bold">
            {text}
        </Navbar.Link>
    );
};

export default Navigation;
