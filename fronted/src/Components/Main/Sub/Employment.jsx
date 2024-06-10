import { MdHome } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";

function Employment() {
  const [jobCards, setJobCards] = useState([]);
  const [formData, setFormData] = useState({
    mode: "",
    type: "",
    company: "",
    location: "",
  });
  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Fetch data from an API endpoint
        const response = await fetch(
          "http://localhost:8000/employment/data_get",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        // Parse the response as JSON
        const jsonData = await response.json();
        // Update the state variable with the fetched data
        setJobCards(jsonData.data);
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
      }
    };
    // const columnData = async () => {
    //   try {
    //     // Fetch data from an API endpoint
    //     const response = await fetch(
    //       `localhost:8000/employment/data_column?column=${'mode'}`
    //     );
    //     // Parse the response as JSON
    //     const jsonData = await response.json();
    //     // Update the state variable with the fetched data
    //     setJobCards(jsonData.data);
    //   } catch (error) {
    //     // Handle errors
    //     console.error("Error fetching data:", error);
    //   }

    // };
    fetchData();
    // columnData();
  }, [formData]);

  const handleLocationChange = (event) => {
    setFormData({
      ...formData,
      location: event.target.value,
    });
  };

  const handleJobChange = (event) => {
    setFormData({
      ...formData,
      company: event.target.value,
    });
  };

  const handleEducationChange = (event) => {
    setFormData({
      ...formData,
      type: event.target.value,
    });
  };

  const handleWorkModeChange = (event) => {
    setFormData({
      ...formData,
      mode: event.target.value,
    });
  };
  return (
    <div className="flex flex-col px-[3rem] bg-#F5F5F5 h-auto">
      <h1 className="text-5xl font-semibold w-full text-center py-[3rem]">
        Employment
      </h1>
      <div className="grid sm:grid-cols-[1fr_4fr] gap-[2rem] sm:overflow-auto">
        <div className="sm:sticky top-0 h-[22rem] bg-white rounded-xl flex flex-col gap-[1rem] p-[1rem] shadow-xl">
          <h3 className="font-semibold text-xl">Filters</h3>
          <div className="flex flex-col items-start gap-[0.5rem]">
            <h4 className="font-semibold">Location</h4>
            <select
              name="location"
              className="px-[6px] py-[3px] rounded-md"
              value={formData.location}
              onChange={handleLocationChange}
            >
              <option value="">Select Location</option>
              {}
              <option value="Lucknow">Lucknow</option>
              <option value="alwar">Alwar</option>
              <option value="Agra">Agra</option>
              <option value="Mathura">Mathura</option>
              <option value="Delhi">Delhi</option>
              <option value="Jodhpur">Jodhpur</option>
            </select>
          </div>
          <div className="flex flex-col items-start gap-[0.5rem]">
            <h4 className="font-semibold">Job Type</h4>
            <select
              name="company"
              className="px-[6px] py-[3px] rounded-md"
              value={formData.company}
              onChange={handleJobChange}
            >
              <option value="">Select Job</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>
          </div>
          <div className="flex flex-col items-start gap-[0.5rem]">
            <h4 className="font-semibold">Education</h4>
            <select
              name="type"
              className="px-[6px] py-[3px] rounded-md"
              value={formData.type}
              onChange={handleEducationChange}
            >
              <option value="">Select Education</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>
          </div>
          <div className="flex flex-col items-start gap-[0.5rem]">
            <h4 className="font-semibold">Work Mode</h4>
            <select
              name="mode"
              className="px-[6px] py-[3px] rounded-md"
              value={formData.mode}
              onChange={handleWorkModeChange}
            >
              <option value="">Select Work Mode</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]">
          {jobCards.map((job, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-[1rem] bg-white rounded-xl shadow-md p-[1rem]"
            >
              <div className="flex flex-col gap-[0.3rem]">
                <h1 className="font-semibold text-xl">{job.title}</h1>
                <p className="text-gray-500">{job.company}</p>
              </div>
              <div>
                <p className="text-gray-500 flex items-center gap-[5px]">
                  <FaLocationDot />
                  {job.location}
                </p>
                <p className="text-gray-500 flex items-center gap-[5px]">
                  <MdHome />
                  {job.mode}
                </p>
              </div>
              <p className="bg-gray-800 text-white py-[4px] px-[8px] rounded-md">
                {job.type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Employment;
