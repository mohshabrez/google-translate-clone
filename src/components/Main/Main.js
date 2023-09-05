import { Button } from "react-bootstrap";
import "./Main.css"
import translate from "../../assets/translate.png"
import www from "../../assets/world-wide-web.png"
import pic from "../../assets/insert-picture-icon.png"
import docs from "../../assets/google-docs.png"
import TranslateApp from "../Translate/TranslateApp";


export function Main(){
    return(
        <div className="main">
            <Button variant="outline-secondary"><img src={translate} alt="textBtn"/>Text</Button>
            <Button variant="outline-secondary"><img src={pic} alt="textBtn"/>Images</Button>
            <Button variant="outline-secondary"><img src={docs} alt="textBtn"/>Documents</Button>
            <Button variant="outline-secondary"><img src={www} alt="textBtn"/>Websites</Button>
            <TranslateApp/>
        </div>
    )
}