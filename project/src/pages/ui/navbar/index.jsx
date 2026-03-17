import "./index.css";

export const Navbar = () => {

    return (
        <div className="nav-capsule">
            <a href="#" className="nav-item">Главная</a>
            <a href="#" className="nav-item active">О проекте</a>
            <a href="#" className="nav-item">Помощь</a>
            <a href="#" className="nav-item">Связаться с нами</a>
        </div>
    );
}