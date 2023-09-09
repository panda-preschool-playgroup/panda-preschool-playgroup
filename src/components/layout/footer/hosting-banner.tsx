import { FC } from "react";

const HostingBanner: FC = () => {
    return (
        <div className="px-4 py-4 bg-slate-600 border-t border-slate-500 text-slate-100 text-center">
            <span className="text-sm">
                Free charity hosting by <a href="https://www.kualo.com/free-charity-hosting">Kualo</a>
            </span>
        </div>
    );
};

export default HostingBanner;
