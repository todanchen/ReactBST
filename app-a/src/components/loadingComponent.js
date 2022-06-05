import React from "react";
import { Spinner, Button } from "react-bootstrap";

const LoadingComponent = (props) => {
  const { loading } = props;
  let showTag;
  if (loading) {
    showTag = (
      <div style={{ paddingBottom: "10px" }}>
        <Button variant="primary" disabled>
          <Spinner animation="border" role="status" aria-hidden="true" />
          Loading...
        </Button>
      </div>
    );
  } else {
    showTag = <div></div>;
  }
  return showTag;
};

export default LoadingComponent;
