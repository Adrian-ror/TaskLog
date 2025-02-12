import PropTypes from 'prop-types';
import { FormField, GenderSelect } from '../../common/index.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";

const RegisterView = ({ formData, errors, genders, today, handleChange, handleSubmit }) => {
    return (
        <div className="flex items-center justify-center max-w-screen-lg">
            <div className="flex w-full max-w-5xl bg-white border-2 border-gray-400 rounded-xl shadow-xl p-6">
                <div className="w-1/2 relative flex items-center justify-center shadow-lg border-2 bg-gray-100 rounded-l-xl overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/create-account.png')" }}></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-30"></div>
                </div>
                <div className="w-1/2 p-6">
                    <h2 className="text-4xl font-bold text-center text-indigo-800 mb-6">Create an Account</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <FormField label="Username" name="username" type="text" value={formData.username} onChange={handleChange} error={errors.username} placeholder="Enter your username" />
                        <FormField label="First Name" name="firstName" type="text" value={formData.firstName} onChange={handleChange} error={errors.firstName} placeholder="Enter your first name" />
                        <FormField label="Last Name" name="lastName" type="text" value={formData.lastName} onChange={handleChange} error={errors.lastName} placeholder="Enter your last name" />
                        <FormField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} placeholder="Enter your email address" />
                        <FormField label="Phone Number" name="phoneNumber" type="text" value={formData.phoneNumber} onChange={handleChange} error={errors.phoneNumber} placeholder="e.g., +123456789 or 987654321" />
                        <FormField label="Date of Birth" name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleChange} max={today} error={errors.dateOfBirth} placeholder="Select your date of birth" />
                        <GenderSelect name="gender" value={formData.gender} onChange={handleChange} genders={genders} error={errors.gender} />
                        <FormField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} error={errors.password} placeholder="Enter a strong password" />
                        <FormField label="Confirm Password" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} error={errors.confirmPassword} placeholder="Re-enter your password" />

                        <button type="submit" className="w-full text-lg bg-indigo-800 text-white py-2 rounded-lg font-bold hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02]">
                            <FontAwesomeIcon
                                icon={faUserPlus}
                                className="mr-2 h-5"
                            />
                            Register
                        </button>
                    </form>
                    <p className="text-center text-gray-600 mt-4 text-lg">
                        Already have an account?{' '}
                        <a href="/" className="text-indigo-800 font-semibold hover:text-blue-900 transition-colors duration-300">Sign In</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

RegisterView.propTypes = {
    formData: PropTypes.shape({
        username: PropTypes.string,
        password: PropTypes.string,
        confirmPassword: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
        phoneNumber: PropTypes.string,
        image: PropTypes.any,
        dateOfBirth: PropTypes.string,
        gender: PropTypes.string
    }).isRequired,
    errors: PropTypes.object.isRequired,
    genders: PropTypes.arrayOf(PropTypes.object).isRequired,
    today: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default RegisterView;