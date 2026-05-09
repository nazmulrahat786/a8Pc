import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useLoaderData, useParams } from "react-router";
import { addToStoreDB, getStoredBook } from "./localstorage";

const AppDetails = () => {
  const [apdta, setApdta] = useState([]);
  const data = useLoaderData();
  const { id } = useParams();
  const appId = parseInt(id);

  const singleApp = data.find((dta) => dta.id === appId);
  const {
  
    title,
    companyName,
    description,
    downloads,
    image,
    ratingAvg,
    ratings,
    reviews,
    size,
  } = singleApp;


  const datas = ratings.map((rat) => ({
    name: rat.name,
    count: rat.count,
  }));
  const handleInstall = (id) => {
    addToStoreDB(appId);
  };

  const addedApps = getStoredBook()


  console.log(addedApps);
  return (
    <div className="bg-gray-100 flex p-16 flex-col gap-3">
      <div className="flex flex-col items-center text-center md:text-justify md:flex-row gap-5">
        <div>
          <img className="rounded" src={image} alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="font-semibold">
            Developed by <samp className="text-indigo-500">{companyName}</samp>
          </p>
          <div className="border-b w-full border-gray-300"></div>
          <div className="flex justify-around gap-6">
            <div>
              <img
                className="w-7 mx-auto md:mx-0"
                src="/src/assets/icon-downloads.png"
                alt=""
              />
              <p>Downloads</p>
              <h3 className="text-3xl font-bold">{downloads}</h3>
            </div>
            <div>
              <img
                className="w-7 mx-auto md:mx-0"
                src="/src/assets/icon-ratings.png"
                alt=""
              />
              <p>Average Ratings</p>
              <h3 className="text-3xl font-bold">{ratingAvg}</h3>
            </div>
            <div>
              <img
                className="w-7 mx-auto md:mx-0"
                src="/src/assets/icon-review.png"
                alt=""
              />
              <p>Total Reviews</p>
              <h3 className="text-3xl font-bold">{reviews}</h3>
            </div>
          </div>
          <button
            onClick={() => {
              handleInstall();
            }}
            className="btn mx-auto  md:mx-0 bg-emerald-400 w-52 text-white "
          >
            Install Now ({size} MB)
          </button>
        </div>
      </div>
      {/* <div border-b w-full border-gray-300></div> */}

      <div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={datas}
            layout="vertical"
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis type="number" />

            <YAxis dataKey="name" type="category" />

            <Tooltip />

            <Bar dataKey="count" fill="#f97316" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h1 className="text-3xl font-bold">Description</h1>
        <p className="text-gray-400 text-justify">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
