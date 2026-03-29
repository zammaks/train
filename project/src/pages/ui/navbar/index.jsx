import "./index.css";

export const Navbar = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="nav-capsule">
            <a
                href="#hero"
                className="nav-item"
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('hero');
                }}
            >
                Главная
            </a>
            <a
                href="#about_project"
                className="nav-item"
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about_project');
                }}
            >
                О проекте
            </a>
            <a
                href="#contact"
                className="nav-item"
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                }}
            >
                Помощь
            </a>
            <a
                href="#footer"
                className="nav-item"
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('footer');
                }}
            >
                Связаться с нами
            </a>
        </div>
    );
}