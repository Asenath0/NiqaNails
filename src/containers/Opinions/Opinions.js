import "./Opinions.css"
import {list} from "../../assets/opinions/opinions_list"

function Opinions() {
    return (
        <section id="opinions">
            <div>
                {list.map(link => <img src={link} alt="opinia klienta" />)}
            </div>
        </section>
    )
}

export default Opinions