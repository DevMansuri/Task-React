import { useRef } from 'react';
import './FormComponent.css'; 

const FormComponentRef = () => {
    const name = useRef();
    const email = useRef();
    const password = useRef();
    
    

 const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      };
        console.log(formData);
    
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            ref={name}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            ref={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            required
            ref={password}
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponentRef;
