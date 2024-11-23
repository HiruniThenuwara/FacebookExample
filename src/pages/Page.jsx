import Background from "../components/Background"
import Navbar from "../components/Navbar"
import PageTitleSection from "../components/PageTitleSection"

function Page() {
  return (
    <div>
       <Navbar/> 
       <Background/>
       <PageTitleSection/>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>   
    </div>
  )
}

export default Page