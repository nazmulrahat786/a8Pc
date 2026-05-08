import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
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

  return (
    <div className="bg-gray-100 flex p-16 flex-col gap-3">
      <div className="flex gap-5">
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
                className="w-7"
                src="/src/assets/icon-downloads.png"
                alt=""
              />
              <p>Downloads</p>
              <h3 className="text-3xl font-bold">{downloads}</h3>
            </div>
            <div>
              <img className="w-7" src="/src/assets/icon-ratings.png" alt="" />
              <p>Average Ratings</p>
              <h3 className="text-3xl font-bold">{ratingAvg}</h3>
            </div>
            <div>
              <img className="w-7" src="/src/assets/icon-review.png" alt="" />
              <p>Total Reviews</p>
              <h3 className="text-3xl font-bold">{reviews}</h3>
            </div>
          </div>
          <button className="btn btn-xs bg-emerald-400 w-52 text-white sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
            Install Now ({size} MB)
          </button>
        </div>
      </div>
      <div border-b w-full border-gray-300 ></div>

      <div></div>
    </div>
  );
};

export default AppDetails;
