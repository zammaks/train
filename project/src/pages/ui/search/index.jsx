import {loupe} from "../../../app/images";

import "./index.css";

export const Search = () => {

    return (
        <div className="search-bar">
            <input
                type="text"
                className="search-input"
            />
            <img
                src={loupe}
                alt="Поиск"
                className="search-icon-right"
            />
        </div>
    );
}