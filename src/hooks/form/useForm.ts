import { useState, ChangeEvent } from 'react';

interface FormState {
  email: string;
  password: string;
}

const useForm = (initialState: FormState) => {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return { formData, loading, setLoading, handleChange };
};

export default useForm;
