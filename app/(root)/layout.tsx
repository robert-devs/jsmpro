import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const Rootlayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>  
        <Navbar  />
        {children}
        <Footer  />
    </>
  )
}

export default Rootlayout