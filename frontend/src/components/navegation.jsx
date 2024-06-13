import React from "react";

class Navegation extends React.Component {
    render(){
        function home_view() {
            window.location = "/"
        }
        let register_view = () => {
            window.location = "/register_page"
        }
        function consult_view () {
            window.location = "/consult_page"
        }
        let contact_view = () => {
            window.location = "/contact_page"
        }
        return(
            <div id="block-nav">
                <li className="items-nav">
                    <button className="btn-nav" onClick={home_view}> Home </button>
                </li>
                <li className="items-nav">
                    <button className="btn-nav" onClick={register_view}> Register </button>
                </li>
                <li className="items-nav">
                    <button className="btn-nav" onClick={consult_view}> Consult </button>
                </li>
                <li className="items-nav">
                    <button className="btn-nav" onClick={contact_view}> Contact </button>
                </li>
            </div>
        )
    }
}

export default Navegation