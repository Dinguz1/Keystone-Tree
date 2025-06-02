const Footer = () => {
    return (
        <footer className="mt-12 xl:mt-8 flex flex-col items-center p-6 gap-4 xl:p-6 bg-(--bg-secondary) md:flex-row md:p-4">
            <div className="w-full flex flex-col md:gap-2 md:text-center">
                <h4 className="text-lg md:text-base">Contact Me</h4>
                <p className="text-base">Contact Info for the Developer Goes Here</p>
            </div>
            <div className="hidden md:inline bg-(--bg-muted) w-[3px] h-[75px]" />
            <div className="flex flex-col w-full md:text-center md:gap-2">
                <h4 className="text-lg md:text-base">Keystone TTRPG</h4>
                <p className="text-base">&copy; 2025 Project Keystone. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;