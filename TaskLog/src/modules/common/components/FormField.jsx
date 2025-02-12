import PropTypes from 'prop-types';

const FormField = ({ label, type, name, value, onChange, error, placeholder, max }) => {
    return (
        <div>
            <label htmlFor={name} className="block text-lg text-indigo-900 font-semibold mb-1">
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                max={max}
                className={`w-full px-3 py-2 border ${
                    error ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800 transition-all duration-300`}
                placeholder={placeholder}
                required
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    placeholder: PropTypes.string,
    max: PropTypes.string,
};

export default FormField;
