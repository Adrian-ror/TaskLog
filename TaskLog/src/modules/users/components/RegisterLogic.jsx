import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp, getAllGenders } from '../../../backend/userService.js';
import RegisterView from './RegisterView';
import {useUsersStore} from "../../../store/useUsersStore.js";

const RegisterLogic = () => {
  const navigate = useNavigate();
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    username: '', password: '', confirmPassword: '', firstName: '',
    lastName: '', email: '', phoneNumber: '', image: null,
    dateOfBirth: '', gender: ''
  });

  const [errors, setErrors] = useState({});
  const [genders, setGenders] = useState([]);
  const { setUser } = useUsersStore();

  useEffect(() => {
    getAllGenders((genders) => setGenders(genders),
        () => setGenders([]));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'Username is required.';
    if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      newErrors.email = 'Please enter a valid email.';
    }
    if (!formData.password) newErrors.password = 'Password is required.';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      await signUp(
          formData.username, formData.password, formData.firstName,
          formData.lastName, formData.email, formData.phoneNumber,
          null, formData.dateOfBirth, formData.gender,
          (autheticatedUser) => {
            setUser(autheticatedUser.user)
            navigate('/dash-board');
          },
          (error) => alert(`Error: ${error.message}`)
      );
      setFormData({
        username: '', password: '', confirmPassword: '', firstName: '',
        lastName: '', email: '', phoneNumber: '', image: null,
        dateOfBirth: '', gender: ''
      });
    } catch (error) {
      alert(`Error during registration: ${error.message}`);
    }
  };

  return (
      <RegisterView
          formData={formData}
          errors={errors}
          genders={genders}
          today={today}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
      />
  );
};

export default RegisterLogic;
