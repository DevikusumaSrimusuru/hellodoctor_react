import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Notifications.css";  // Ensure the path is correct
import Empty from "../components/Empty";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import fetchData from "../helper/apiCall";
import { setLoading } from "../redux/reducers/rootSlice";
import Loading from "../components/Loading";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);

  const getAllNotif = async () => {
    try {
      dispatch(setLoading(true));
      const temp = await fetchData(`/notification/getallnotifs`);
      dispatch(setLoading(false));
      setNotifications(temp);
    } catch (error) {
      console.error("Failed to fetch notifications:", error);
    }
  };

  useEffect(() => {
    getAllNotif();
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <section className="container">
          <h2 className="page-heading">Your Notifications</h2>
          {notifications.length > 0 ? (
            <div className="notifications">
              {notifications.map((ele, i) => (
                <div className="notification-card" key={ele?._id}>
                  <p className="notification-content">{ele?.content}</p>
                  <div className="notification-date">
                    {new Date(ele?.updatedAt).toLocaleDateString()} - {new Date(ele?.updatedAt).toLocaleTimeString()}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </section>
      )}
      <Footer />
    </>
  );
};

export default Notifications;
