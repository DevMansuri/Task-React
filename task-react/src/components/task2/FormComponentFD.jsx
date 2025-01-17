import "./FormComponent.css";

const FormComponentFD = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    const formObject = Object.fromEntries(fd.entries());

    console.log(formObject);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" required />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponentFD;
