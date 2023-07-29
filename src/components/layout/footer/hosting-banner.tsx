import { FC } from "react";

const HostingBanner: FC = () => {
    return (
        <div className="px-4 py-4 bg-gray-100 text-center">
            <span className="text-sm text-gray-600">
                Free charity hosting by{" "}
                <a href="https://www.kualo.com/free-charity-hosting" className="underline hover:no-underline">
                    Kualo
                </a>
            </span>
        </div>
    );
};

export default HostingBanner;
