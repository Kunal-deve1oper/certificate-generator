import React from "react";
import image from "../images/back.png";
import signature from "../images/sig.png";
import "../App.css";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

function Certificate(props) {

  const date = new Date();

  let d = date.toDateString();

  const download = async() => {
    const canvas = await html2canvas(document.querySelector(".banner"));
    canvas.toBlob((blob)=>{
      saveAs(blob,`${props.name}-certificate.png`);
    })
  };

  return (
    <>
      <button className="preview-btn" onClick={download}>Download</button>
      <div className="banner">
        <img src={image} alt="..." />
        <div className="banner-text">
          <h2 className="heading">CERTIFICATE</h2>
          <div className="heading-footer">OF ACHIVEMENT</div>
          <div className="main">THIS CERTIFICATE IS PRESENTED TO</div>
          <div className="main-name">{props.name}</div>
          <hr className="main-hr" />
          <p className="main-ending">
            {props.desc}
          </p>
          <div className="footer">
            <div className="footer-date">
              <span>{d.slice(4,d.length)}</span>
              <hr style={{ width: "120px" }} />
              <span className="footer-text">Date</span>
            </div>
            <div className="footer-sig">
              <img src={props.sig} alt="..." />
              <hr style={{ width: "120px" }} />
              <span className="footer-text">Signature</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{paddingBottom: "20px"}}></div>
    </>
  );
}

export default Certificate;
