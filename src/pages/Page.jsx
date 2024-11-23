import Background from "../components/Background"
import Navbar from "../components/Navbar"
import PageNavbar from "../components/PageNavbar"
import PageTitleSection from "../components/PageTitleSection"

import ProfilePage from "../components/ProfilePage"


function Page() {
  return (
    <div>
      <div className="relative sticky top-0 z-50">
        <Navbar/> 
      </div>
       
       <Background/>
       <div className="mt-[-60px]"><PageTitleSection/></div>
      <div className="mt-[210px]">
       <PageNavbar/>
       <ProfilePage/>
       
       </div>
     
    </div>
  )
}

export default Page