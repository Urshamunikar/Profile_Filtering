
import Select from "react-select";

import SearchBar from "../../components/SearchBar";
import CheckBox from "../../components/CheckBox";
import RadioButton from "../../components/Radiobutton";




const SideBar = ({ data, statusOptions, signalOptions, sourceOptions, handleChange, handleChangeSelect }) => {

    return (

        <div className="sidebar">
            <SearchBar
                name="search"
                value={data.search}
                handleChange={handleChange} />

            <div className="filter_options">
                <RadioButton
                    statusOptions={statusOptions}
                    name="status"
                    value={data.status}
                    handleChange={handleChange}
                />

                <CheckBox
                    signalOptions={signalOptions}
                    name="signal"
                    values={data.signal}
                    handleChange={handleChange}
                />

            </div>
            <div className="select_option">
                <p className="title">By Source</p>
                <Select
                    options={sourceOptions}
                    className="select"
                    value={data.source}
                    onChange={(value) => handleChangeSelect(value)}
                />
            </div>

        </div>

    )
}

export default SideBar;