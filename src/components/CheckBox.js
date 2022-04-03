const CheckBox = ({ signalOptions, values, name, handleChange }) => {
    return (
        <div className="checkbox">
            <p className="title">By Signal</p>
            <div>
                {signalOptions.map((signalOption, index) => {

                    const checkedData = values.filter((value) => {
                        return value === signalOption.value;
                    });

                    return (
                        <div key={index} className = "input_box">
                            <input
                                type="checkbox"
                                value={signalOption.value}
                                name={name}
                                id={signalOption.label}
                                checked={checkedData.length > 0 ? checkedData[0] : false}
                                onChange={handleChange}
                            />
                            <label htmlFor={signalOption.label} className="form_label">
                                {signalOption.label}
                            </label>
                        </div>

                    )
                })}

            </div>

        </div>

    )
}

export default CheckBox;