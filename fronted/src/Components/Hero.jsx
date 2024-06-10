import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Hero() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const handleClick = () => {
    const phoneNumber = "6378852898"; // Replace with the target phone number
    const message = "Hello, I would like to get in touch with you!"; // Optional pre-filled message
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    dispatch({ type: "LOGOUT" });
    // navigate("/login");
  };

  return (
    <>
      <div
        id="hero"
        className="hero route bg-image"
        style={{ backgroundImage: "url(/img/homepg.jpg)" }}
      >
        {/* <div className="overlay-itro" /> */}
        <div className="hero-content display-table">
          <div className="table-cell">
            <div className="container">
              <p className="display-6 color-d">It's time to do something for</p>
              <h1 className="hero-title mb-4">YOURSELVES</h1>
              {isAuthenticated ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{
                    fontSize: "16px",
                    padding: "10px 20px",
                    borderRadius: "5px",
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{
                    fontSize: "16px",
                    padding: "10px 20px",
                    borderRadius: "5px",
                  }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              )}

              <button
                type="button"
                className="btn btn-success whatsapp-button"
                onClick={handleClick}
              >
                <i className="fab fa-whatsapp"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
