import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./Page/Shared/Footer/Footer";
import Header from "./Page/Shared/Header/Header";
import Home from "./Page/Home/Home/Home";
import NotFound from "./Page/Shared/NotFound/NotFound";
import Login from "./Page/Login/Login/Login";
import Register from "./Page/Login/Register/Register";
import EmailVerification from "./Page/Login/Register/EmailVerification/EmailVerification";
import auth from "./firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./Page/Shared/Loading/Loading";
import About from "./Page/About/About";
import Blog from "./Page/Blog/Blog";


function App() {
  const [user, loading] = useAuthState(auth);

  if (user?.emailVerified === false) {
    return <EmailVerification></EmailVerification>;
  }

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/email-verify"
          element={<EmailVerification></EmailVerification>}
        ></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
