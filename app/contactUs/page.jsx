"use client"; // This marks the component as a client-side component

// import { useRouter } from 'next/navigation';
import Header from '../../components/Header'
import Contactus from '../../components/Contactus';
import Footer from "../../components/Footer"
const Page = () => {
    

    return (
        <div>
            <Header/>
          <Contactus/>
        <Footer/>
        </div>
    );
};

export default Page;
