import React from "react";
import { createPortal } from "react-dom";
import exit_btn from "../../assets/imgs/exit_btn.png"
import "./modal.scss"
const ModalWrapper = ({ active, setActive, children, filter_headertxt }) => {

    return createPortal(
        <div className={active ? "modal_filter active" : `modal_filter`} >
            <div className="filter_header">
                {filter_headertxt}
                <img alt="" src={exit_btn} onClick={() => setActive(false)} />
            </div>
            {children}
        </div>,
        document.querySelector("#root")
    );
}


export default ModalWrapper