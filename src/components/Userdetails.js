import React, { useState } from "react";
import Certificate from "./Certificate";

function Userdetails() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file,setFile] = useState("");
  const [preview, setPreview] = useState(false);

  const getName = (e) => {
    setName(e.target.value);
  };

  const getDescription = (e) => {
    setDescription(e.target.value);
  };

  const getFile = (e)=>{
    const inputFile = e.target.files[0];
    const indx = inputFile.name.lastIndexOf(".");
    const value = inputFile.name.slice(indx + 1,inputFile.length).toLowerCase();
    if(value === 'png' || value === 'jpg' || value === 'jpeg')
    {
      const reader = new FileReader();
      reader.addEventListener("load",()=>{
        setFile(reader.result)
      })
      reader.readAsDataURL(inputFile); 
    }
    else{
      alert("Enter correct file format(jpg,png,jpeg")
    } 
  }

  const previewCertificate = () => {
    if (preview === false) setPreview(true);
    else setPreview(false);
  };

  return (
    <div className="header" style={preview ? {}:{height:"100vh"}}>
      <h1>CERTIFICATE GENERATOR</h1>
      <div className="text-input">
        <label>NAME</label>
        <input type="text" onChange={getName} />
      </div>
      <div className="form-floating text-area">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{ height: "150px", width: "450px",backgroundColor: "transparent" ,color:"white"}}
          onChange={getDescription}
        ></textarea>
        <label htmlFor="floatingTextarea2">Certificate Description</label>
      </div>
      <div className="file-style">
        <input type="file" name="file" id="file" accept="images/*" onChange={getFile}/>
        <label htmlFor="file" className="sig-label">
          Upload Signature
        </label>
      </div>
      <button className="preview-btn" onClick={previewCertificate}>
        {preview ? "Hide" : "Preview"}
      </button>
      {preview ? <Certificate name={name} desc={description} sig={file}/> : ""}
    </div>
  );
}

export default Userdetails;
