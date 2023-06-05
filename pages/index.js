const HomePage = () => {
  return (
    <div className="home">
      <div className="content">
        <h2 className="text-3xl">Search your favourite Movie</h2>
        <p>
          Sign up for our website free of charge. <br /> Click here to create
          your account.
        </p>
        <div className="mt-2">
          <a href="/signup">
            {" "}
            <button className="signup">Signup</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
