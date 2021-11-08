import React from "react";
import Form from '../form/Form';
class Sidebar extends React.Component {



    render() {
        return (
            <>
                <input type="checkbox" id="check"></input>
                <label htmlFor="check">
                    <a className="btn-open-sidebar">
                        <i className="bi bi-list" id="btn-sidebar-icone"></i>
                    </a>
                    <a className="btn-close-sidebar">
                        <i className="bi bi-x-lg" id="sidebar-cancel"></i>
                    </a>
                </label>
                <div className="sidebar">
                    <Form/>
                </div>
            </>
        )
    }

}

export default Sidebar;