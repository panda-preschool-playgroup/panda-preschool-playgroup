import { Button, Navbar } from "flowbite-react";
import { StaticImage } from "gatsby-plugin-image";
import { FC } from "react";

const Navigation: FC = () => {
    return (
        <Navbar fluid className="bg-yellow-dark h-42">
            <Navbar.Brand>
                <StaticImage
                    src="../images/logo.png"
                    alt="Panda Pre-School Playgroup Logo"
                    className="w-16 md:w-32 mr-12"
                />
                <span className="md:text-4xl font-kg-second-chances">PANDA PRE-SCHOOL PLAYGROUP</span>
            </Navbar.Brand>
            <div className="flex md:order-2 font-kg-neatly-printed">
                <Button size="xl" className="bg-green-dark">
                    <p className="text-2xl font-bold text-white">APPLY</p>
                </Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className="font-kg-neatly-printed">
                <Navbar.Link active href="#" className="text-3xl font-bold">
                    Home
                </Navbar.Link>
                <Navbar.Link href="#" className="text-3xl font-bold">
                    Our setting
                </Navbar.Link>
                <Navbar.Link href="#" className="text-3xl font-bold">
                    Sessions
                </Navbar.Link>
                <Navbar.Link href="#" className="text-3xl font-bold">
                    About us
                </Navbar.Link>
                <Navbar.Link href="#" className="text-3xl font-bold">
                    Funding
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
