
import Header from '../components/Header' 
import Footer from '../components/Footer'
import MayaCard from '../components/MayaCard' 
import OMRSection from '../components/OMRSection' 
import Manager from '../components/Manager' 
import Updates from '../components/Updates' 
import DownloadSection from '../components/DownloadSection'
// import Carousel from '../components/Carousel'
import CarouselPlugin from "../components/CarouselPlugin";
export default async function Home () {
  // await dbConnect()
  return (
  <div className="bg-white h-screen">
    {/* <h1>
      web app
    </h1>
    */}
 <Header/>
 <CarouselPlugin/>

 <div className="flex justify-center mt-24 items-center space-x-4">
  {/* First image */}
  <img src="https://bisempk.edu.pk/img/cm.png" alt="First Image" className="w-72 h-auto" />
  
  {/* Second image */}
  <img src="https://bisempk.edu.pk/img/img_background/cm_msg.png" alt="Second Image" className="w-[37%] h-auto" />
</div>
 <div className="flex justify-center mt-24 items-center space-x-4">
  {/* First image */}
  <img src="https://bisempk.edu.pk/img/secretary.png" alt="First Image" className="w-[80%] h-auto" />
</div>
<div className="flex justify-center mt-24 items-center space-x-4">
  {/* First image */}
  <img src="https://bisempk.edu.pk/img/chairman.png" alt="First Image" className="w-[35%] h-auto" />
  
  {/* Second image */}
  <img src="https://bisempk.edu.pk/img/img_background/chairman_msg.jpg" alt="Second Image" className="w-[40%] h-auto" />
</div>

<div className="flex gap-44 flex-col">

<Updates/>
<MayaCard/>
</div>
<Manager/>
<OMRSection/>
<DownloadSection/>
<Footer/>
  </div>
  );
}
