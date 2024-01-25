import { Provider } from "react-redux";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/body/sidebar/Sidebar";
import store from "./utils/store";
import Body from "./components/body/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Videocontainer from "./components/body/videoContainer/Videocontainer";
import WatchPage from "./components/watchPage/WatchPage";

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path:"/",
        element: <Videocontainer/> 
      },
      {
        path:"/watch",
        element:<WatchPage/>
      }
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <RouterProvider router={approuter} />

        
        {/* <div className="">{ <Sidebar /> }</div> */}
      </Provider>
    </>
  );
}

export default App;
