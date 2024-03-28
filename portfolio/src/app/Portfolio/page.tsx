import NavTabs from "../components/navigation/navtabs";
import Portfoliopage from '../components/pages/portfoliopage';


export default function Portfolio(){
    return(
        <div>
            <NavTabs/>
            <div>
                <Portfoliopage />
            </div>
        </div>
    )
}