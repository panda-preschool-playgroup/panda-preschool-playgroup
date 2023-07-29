import { FC } from "react";
import { Link } from "gatsby";
import { Dropdown } from "flowbite-react";
import NavigationItem from "@/components/layout/header/navigation-item";

interface NavigationSectionProps {
    title: string;
    href?: string;
    menuItems?: NavigationMenuItem[];
    activeSection?: string;
}

interface NavigationMenuItem {
    title: string;
    href: string;
}

const NavigationSection: FC<NavigationSectionProps> = ({
    title,
    href,
    menuItems,
    activeSection,
}: NavigationSectionProps) => {
    const navigationItem = <NavigationItem text={title} href={href} activeSection={activeSection} />;

    return href ? (
        navigationItem
    ) : (
        <Dropdown inline className="width-full" label={navigationItem}>
            {menuItems?.map((menuItem: NavigationMenuItem) => (
                <Dropdown.Item key={menuItem.title} className="text-xl">
                    <Link to={menuItem.href}>{menuItem.title}</Link>
                </Dropdown.Item>
            ))}
        </Dropdown>
    );
};

export default NavigationSection;
