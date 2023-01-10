// import Head from "next/head";
import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Configuration, OpenAIApi } from "openai";
import "../App.css"
// import styles from "./index.module.css";

const PortraitGenBtn = ({setCharPortrait}) => {

  const [loading, setLoading] = useState(false);

// at the end of the onSubmit, we want to run a function that will update CharPortrait with the received URL
  async function onSubmit(event) {
    event.preventDefault();
    console.log("entering function")

    const configuration = new Configuration({
        apiKey: "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",
    });
    console.log(configuration)
    
    const openai = new OpenAIApi(configuration);

    try {      
        setLoading(true);
        const response = await openai.createImage({
            prompt: "oil painting of a wizard",
            n: 1,
            size: "256x256",
        });
      
        var image_url = response.data.data[0].url;
        setCharPortrait(image_url);
        console.log(image_url)
        setLoading(false);
      
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
      setLoading(false);
    }
  }

  return (
    <>
        <Button className="btn btn-danger char-profile-btn" onClick={(event) => onSubmit(event)}>Generate Portrait</Button>
        {loading ? <Spinner animation="border" role="status" className="mx-3">
            <span className="visually-hidden">Loading...</span>
        </Spinner> : <></>}
    </>
  );
}

export default PortraitGenBtn;