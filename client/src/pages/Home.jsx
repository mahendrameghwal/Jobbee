import { Fragment } from "react"
import Bannner1 from "../components/Bannner1"
import Explores from "../components/Explores"
import FeaturedJobs from "../components/FeaturedJobs"
import LatestJob from "../components/LatestJob"



const Home = () => {
  
  return (
    <Fragment>
    <Bannner1/>
    <Explores/>
    <FeaturedJobs/>
    <LatestJob/>
    </Fragment>
  )
}

export default Home