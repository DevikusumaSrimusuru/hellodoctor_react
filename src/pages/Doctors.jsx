import React, { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/doctors.css";
import fetchData from "../helper/apiCall";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/reducers/rootSlice";
import Empty from "../components/Empty";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [specializationFilter, setSpecializationFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [specializationList, setSpecializationList] = useState([]);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);

  const getSpecializations = (data) => {
    const specializations = new Set();

    data.forEach((doctor) => {
      specializations.add(doctor.specialization);
    });

    return Array.from(specializations);
  };

  useEffect(() => {
    fetchAllDocs();
  }, []);

  const filteredDoctors = doctors.filter((doctor) => {
    const nameMatch = searchQuery === "" || (doctor.userId.firstname && doctor.userId.firstname.toLowerCase().includes(searchQuery.toLowerCase())) || (doctor.userId.lastname && doctor.userId.lastname.toLowerCase().includes(searchQuery.toLowerCase()));
    const specializationMatch = specializationFilter === "" || doctor.specialization === specializationFilter;
    return nameMatch && specializationMatch;
  });
  
  
  


  const fetchAllDocs = async () => {
    dispatch(setLoading(true));
    try {
      const data = await fetchData(`/doctor/getalldoctors`);
      setSpecializationList(getSpecializations(data));
      setDoctors(data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <>
      <Navbar />
      {loading && <Loading />}
      {!loading && (
        <section className="container doctors">
          <div className="filters">
            <input
              className="searchInput"
              type="text"
              placeholder="Search by name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <select
              className="filterSelect"
              value={specializationFilter}
              onChange={(e) => setSpecializationFilter(e.target.value)}
            >
              <option value="">All Specializations</option>
              {specializationList.map((specialization) => (
                <option key={specialization} value={specialization}>
                  {specialization}
                </option>
              ))}
            </select>
          </div>
          <h2 className="page-heading">Our Doctors</h2>
          {filteredDoctors.length > 0 ? (
            <div className="doctors-card-container">
              {filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor._id} ele={doctor} />
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

export default Doctors;
