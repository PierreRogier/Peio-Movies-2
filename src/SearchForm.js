import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
    const { query, setQuery, error } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <h2>search peïo movies</h2>
            <input
                className="form-input"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            {error.show && <div className="error">{error.msg}</div>}
        </form>
    );
};

export default SearchForm;
