import { useAuth } from "@/authcontext/authcontext";
const HomePage = () => {
  const { currentUser } = useAuth();
  return (
    <div>
      <h1 className="text-black">Home Page</h1>
      <p>{currentUser.displayName}</p>
    </div>
  );
};

export default HomePage;
