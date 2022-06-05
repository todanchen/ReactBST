import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import download from "downloadjs";
import SplitLineComponent from "../../components/splitLineComponent";
import LoadingComponent from "../../components/loadingComponent";
import ApiService from "../../services/api_requests";
import "./splunkFileDown.css";

function SplunkFileDownPage() {
  let [loading, setLoading] = useState(false);
  let [splunkLink, setSplunkLink] = useState("");
  let [code, setCode] = useState();
  let [responseText, setResponseText] = useState("");

  useEffect(() => {
    document.title = "Splunk data fetch";
    console.log("yes");
  }, []);

  const handleChangeLink = (e) => {
    setSplunkLink(e.target.value);
    console.log(splunkLink);
  };

  const handleSubmitClick = () => {
    setCode(null);
    setResponseText(null);
    setLoading(true);
    // get data via api service
    ApiService.downloadSplunkData(splunkLink)
      .then((res) => {
        console.log(res);
        setCode(200);
        if (res.headers["content-type"] === "application/vnd.ms-excel") {
          let filename = res.headers["content-disposition"].match(
            "filename=(?<filename>.*)"
          ).groups.filename;
          download(res.data, filename, "application/vnd.ms-excel");
          setResponseText("Successfully get data.");
        } else {
          res.data
            .text()
            .then((data) => {
              console.log("dd===: ", data);
              setResponseText(data);
            })
            .catch((err) => {
              setResponseText("Unknown!");
            });
        }
      })
      .catch((err) => {
        console.log(err);
        setCode(err.code);
        setResponseText(err.message);
      });
    setLoading(false);
  };

  return (
    <div className="splunk-2">
      <div className="text-2">
        <h1>User Guide - Intro</h1>
        <p>
          Are you still thinking about how to crawl the data of the Splunk
          search results, and we provide a simple and fast method, you just need
          to submit the share link of the search results.
        </p>
        <p>Please follow the steps below</p>
        <ul>
          <li>Go to your splunk search results page and copy its share link</li>
          <li>Paste the share link into the input box and submit</li>
        </ul>
      </div>
      <SplitLineComponent />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Share Link</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter share link"
            onChange={handleChangeLink}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmitClick}>
          Submit
        </Button>
      </Form>
      <br />
      <SplitLineComponent />
      <LoadingComponent loading={loading} />
      <h4>Response</h4>
      <Card bg="secondary" key="Secondary" text="white" className="mb-2">
        <Card.Header>Status: {code}</Card.Header>
        <Card.Body>
          <Card.Text
            style={{
              width: "60%",
              color: "yellow",
            }}
          >
            {responseText}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SplunkFileDownPage;
