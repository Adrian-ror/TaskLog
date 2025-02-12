import PropTypes from 'prop-types';

const GenderSelect = ({ genders, value, onChange, error }) => {
    return (
        <div>
            <label htmlFor="gender" className="block text-lg text-indigo-900 font-semibold mb-1">
                Gender
            </label>
            <select
                id="gender"
                name="gender"
                value={value}
                onChange={onChange}
                className={`w-full px-3 py-2 border ${
                    error ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800 transition-all duration-300`}
                required
            >
                <option value="" disabled>Select your gender</option>
                {genders.length > 0 ? (
                    genders.map((gender, index) => (
                        <option key={index} value={gender.toLowerCase()}>
                            {gender}
                        </option>
                    ))
                ) : (
                    <option disabled>Loading genders...</option>
                )}
            </select>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

GenderSelect.propTypes = {
    genders: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
};

export default GenderSelect;
