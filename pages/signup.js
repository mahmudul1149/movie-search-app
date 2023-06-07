import { useAuth } from "@/authcontext/authcontext";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/style.module.css";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoader] = useState(false);

  const { signup, signupWithGoogle } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      return setError("Password don't match");
    }
    try {
      await signup(email, password, name);
      setLoader(true);
      router.push("/movie");
    } catch (error) {
      console.log(error);
      setError("Something went wrong to create account");
      setLoader(false);
    }
  };
  const handleSignupWithGoogle = async () => {
    try {
      await signupWithGoogle();
      router.push("/movie");
    } catch (error) {
      console.log(error);
      setError("Something went wrong to create account");
    }
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        {error && (
          <p className="error text-black text3xl bg-red-300 py-2 px-2 mt-2 border-rounded">
            {error}
          </p>
        )}
        <h2 className="text-black text-3xl">Create your account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className={styles.label}>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter Name"
              className={styles.inputfield}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              required
              className={styles.inputfield}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className={styles.label}>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              required
              className={styles.inputfield}
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
            />
          </div>
          <div>
            <label className={styles.label}>Confirm Password:</label>
            <input
              type="password"
              id="rePassword"
              name="rePassword"
              placeholder=" Confirm Password"
              required
              className={styles.inputfield}
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
          </div>
          <button
            disabled={loading}
            type="submit"
            className={styles.btnPrimary}
          >
            Sign Up
          </button>
        </form>
        <div className="text-center">
          <a
            href="/login"
            className=" chnageRoute text-black text-1xl text-center underline"
          >
            Already Have a Account ? Login
          </a>
        </div>

        <p className="text-center text-black text-1xl py-2 or">0r</p>
        <div className="postion-box">
          <div className="text-center">
            <button
              className="btn-google text-1xl "
              onClick={handleSignupWithGoogle}
            >
              SIGN UP WITH GOOGLE
            </button>
          </div>
          <div className="text-center">
            <img
              className="google-icon"
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
