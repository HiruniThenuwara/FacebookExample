import Background from "../components/Background"
import Navbar from "../components/Navbar"
import PageNavbar from "../components/PageNavbar"
import PageTitleSection from "../components/PageTitleSection"
import ProfilePage from "../components/ProfilePage"

function Page() {
  return (
    <div>
       <Navbar/> 
       <Background/>
       <div className="mt-[-60px]"><PageTitleSection/></div>
    
       <PageNavbar/>
       <ProfilePage/>
        <h1 className="text-3xl font-bold underline">
      
    </h1>   
    </div>
  )
}

export default Page