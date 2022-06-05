import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import SplitLineComponent from "../../components/splitLineComponent";
import "./homePage.css";

function HomeComponent() {
  useEffect(() => {
    document.title = "DAI";
  }, []);

  return (
    <div className="homePage">
      <div className="textConetnt">
        <div>
          <img src="./image/logo.png" alt="dd"></img>
        </div>
        <br />
        <h1>What's DAI</h1>
        <p>
          DAI means data application interface, which provides a friendly and
          visual page to access related data API. The previously accessed FAST
          API was just a simple Swagger UI visual page and all the backend
          interfaces are posted on it, which is a bad experience for users.
          Therefore, the purpose of this APP is to provide a platform that
          allows users to access several commonly used data interfaces more
          conveniently and more friendly.
        </p>
        <br />
        <SplitLineComponent />
        <h1>How to use</h1>
        <p>
          You can find the function you need through the sidebar, then click it
          to enter the page and follow the instructions to use it.
        </p>
        <div className="cards_contain">
          <Card bg="light" key="Light" text="dark" className="mb-2">
            <Card.Header>Splunk data download</Card.Header>
            <Card.Body>
              <Card.Text
                style={{
                  width: "100%",
                }}
              >
                On this page, you can quickly download the data from the splunk
                search panel via the splunk share link.
              </Card.Text>
              <Button variant="primary">Try it now</Button>
            </Card.Body>
          </Card>
          <Card bg="secondary" key="Secondary" text="white" className="mb-2">
            <Card.Header>Cell location query</Card.Header>
            <Card.Body>
              <Card.Text
                style={{
                  width: "100%",
                }}
              >
                If you want to know the location info of the log but there is no
                GPS, try to use cell info to query it.
              </Card.Text>
              <Button variant="primary">Try it now</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div>
        {/* <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
      </div>
    </div>
  );
}

export default HomeComponent;
