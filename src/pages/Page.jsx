import Background from "../components/Background"
import Navbar from "../components/Navbar"

function Page() {
  return (
    <div>
       <Navbar/> 
       <Background/>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>   
    </div>
  )
}

export default Page