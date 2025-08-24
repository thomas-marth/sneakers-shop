import { useState } from "react";
import styles from "./styles.module.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Введите email";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Некорректный email";
    }
    if (!formData.name) {
      newErrors.name = "Введите имя";
    }
    if (!formData.message) {
      newErrors.message = "Введите сообщение";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Form submitted:", formData);
    setErrors({});
    setFormData({ email: "", name: "", message: "" });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <input
            type="email"
            name="email"
            placeholder="Ваш email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
        <div className={styles.field}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>
      </div>
      <div className={styles.field}>
        <textarea
          name="message"
          placeholder="Введите сообщение"
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
        />
        {errors.message && (
          <span className={styles.error}>{errors.message}</span>
        )}
      </div>
      <button type="submit" className={styles.submit}>
        Отправить
      </button>
    </form>
  );
}

export default ContactForm;
