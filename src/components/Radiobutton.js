const RadioButton = ({ statusOptions, name, value, handleChange }) => {
    return (
        <div className="radio_option">
            <p className="title">By Status</p>
            {statusOptions.map((statusOption, index) => {
                return (
                    <div key={index} className="input_box">
                        <input
                            type="radio"
                            value={statusOption.value}
                            name={name}
                            id={statusOption.label}
                            onChange={handleChange}
                            checked={value && statusOption.value === value}
                        />
                        <label htmlFor={statusOption.label} className="form_label">
                            {statusOption.label}
                        </label>


                    </div>
                )
            })}
        </div>

    )
}

export default RadioButton;