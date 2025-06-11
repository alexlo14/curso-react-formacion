const BootstrapForm = () => {
    return (
        <form>
        <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
            />
        </div>
        <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
            />
        </div>
        <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            required
            ></textarea>
        </div>
        </form>
    );
};

export default BootstrapForm;

