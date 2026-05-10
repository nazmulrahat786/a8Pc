import { removeToStoreDB } from "./localstorage";

const InstallAppCard = ({ apps }) => {
  const { id, title, downloads, image, ratingAvg,size } = apps;


  const handleUninstall = (id) => {
    removeToStoreDB(id)}
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded gap-5">
        <div className="flex items-center gap-5" >
             <img className="w-16 rounded-xl" src={image} alt="" />
      <div>
        <h1 className="font-bold text-xl">{title}</h1>
       
       <div className="flex pt-1 gap-2">
         <p className=" text-sm flex gap-1 items-center text-green-500 font-bold"><img className="w-4 h-4" src="/src/assets/icon-downloads.png" alt="" />{downloads}</p>
        <p className="text-sm flex gap-1 items-center text-yellow-500 font-bold" ><img className="w-4 h-4" src="/src/assets/icon-ratings.png" alt="" />{ratingAvg}</p> 
        <p className="text-sm text-gray-500 font-medium">{size} MB</p> 
       </div>
      </div>
        </div>
      <button onClick={()=>{
        handleUninstall(id)
      }} className="bg-emerald-300 text-white px-4 py-2 rounded hover:bg-emerald-400">Uninstall</button>
    </div>
  );
};

export default InstallAppCard;
