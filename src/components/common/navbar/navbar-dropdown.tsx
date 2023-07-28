import { FC } from "react";
import { Link } from "gatsby";
import { Dropdown } from "flowbite-react";
import NavbarItem from "@/components/common/navbar/navbar-item";

interface NavbarDropdownProps {
    title: string;
    menuItems: NavbarMenuItem[];
}

interface NavbarMenuItem {
    title: string;
    href: string;
}

const NavbarDropdown: FC<NavbarDropdownProps> = ({ title, menuItems }: NavbarDropdownProps) => {
    return (
        <Dropdown inline className="width-full" label={<NavbarItem text={title} />}>
            {menuItems.map((menuItem: NavbarMenuItem) => (
                <Dropdown.Item key={menuItem.title} className="text-xl">
                    <Link to={menuItem.href}>{menuItem.title}</Link>
                </Dropdown.Item>
            ))}
        </Dropdown>
    );
};

export default NavbarDropdown;
