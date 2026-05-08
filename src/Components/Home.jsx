
import Banner from './Banner';
import TrendingApps from './TrendingApps';
import { useLoaderData } from 'react-router';


const Home = () => {
    const data = useLoaderData()
  
 
    return (
        <div >
           <Banner></Banner>
           <TrendingApps  data={data} ></TrendingApps>
        </div>
    );
};

export default Home;