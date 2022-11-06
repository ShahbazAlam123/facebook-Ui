import "./register.css";

const Register = () => {
  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <div className="textRegister">
          <span className="texts">facebook</span>
          <span className="desc">connect with friends and people</span>
        </div>

        <div className="registerform">
          <input placeholder="UserName" type="text" className="registerInput" />
          <input placeholder="Email" type="text" className="registerInput" />
          <input placeholder="Password" type="text" className="registerInput" />
          <input
            placeholder="Password Again"
            type="text"
            className="registerInput"
          />
          <button className="registerInput" id="signup">
            Sign Up
          </button>
          <button className="registerInput" id="loginto">
            Log Into Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
