import "./login.css";

const Login = () => {
  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <div className="textRegister">
          <span className="texts">facebook</span>
          <span className="desc">connect with friends and people</span>
        </div>

        <div className="registerform">
          <input placeholder="Email" type="text" className="registerInputs" />
          <input
            placeholder="Password"
            type="text"
            className="registerInputs"
          />
          <button className="registerInputs" id="signup">
            Log In
          </button>

          <span className="link">Forgot Password</span>

          <button className="registerInput" id="loginto">
            Create a New Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
