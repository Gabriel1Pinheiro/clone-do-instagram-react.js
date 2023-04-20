
import "./Stories.css"
import Story from "../Feed/comps/Story/Story"

import Story01 from "./img/Igão.jpg"
import Story02 from "./img/boca.jpg"
import Story03 from "./img/mitico.jpg"
import Story04 from "./img/bulls.jpg"
import Story06 from "./img/luana.jpg"
import Story05 from "./img/major.jpg"

function Stories() {

  return (
    <div className="Stories">
     <Story img={Story01} nome="igao"/>
     <Story img={Story02} nome="bocade09"/>
     <Story img={Story03} nome="mitico"/>
     <Story img={Story04} nome="bulls"/>
     <Story img={Story06} nome="mcluanna"/>
     <Story img={Story05} nome="major.rd"/>
    </div>
  )
}
export default Stories