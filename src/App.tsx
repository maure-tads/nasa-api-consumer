import "./App.css";
import NasaApiService from "./services/NasaApiService";
import { useEffect, useState } from "react";
import { Card, Container, Form, InputGroup, Row } from "react-bootstrap";

interface IImageRequest {
  date: string;
  explanation: string;
  hdurl: string;
  title: string;
  url: string;
}

function App() {
  const [imageData, setImageData] = useState<IImageRequest>();
  const [data, setData] = useState<string>("");

  

  useEffect(() => {
    NasaApiService.get(data)
      .then(({ data }) => {
        setImageData(data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [data]);

  return (
    <Container className="d-flex align-items-center flex-column">
         <InputGroup className="mt-5 w-25">
          <Form.Control
            placeholder="Data"
            aria-label="Data"
            type="date"
            onChange={(e)=>setData(e.target.value)}
          />
        </InputGroup>
        <Card className="w-50 m-5">
          <Card.Img variant="top" src={imageData?.url} />
          <Card.Body>
            <Card.Title>{imageData?.title}</Card.Title>
            <Card.Text>{imageData?.explanation}</Card.Text>
          </Card.Body>
        </Card>
    </Container>
  );
}

export default App;
