import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import classes from "./Auth.module.css";

const Auth = () => {
  const [email, setEmail] = useState("hang@gmail.com");
  const [password, setPassword] = useState("1234567");
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login({ email, password }));
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={emailChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={passwordChangeHandler}
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
