import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import ReactStars from "react-stars";

export default ({ products }) => {
  return (
    <Col sm={12} md={9} className="products-list">
      {products.map((value, index) => {
        let price = value.price.toString().split(""),
          pre = price
            .splice(1)
            .join("")
            .replace(".", ",")
            .split(","),
          priceLessThanThousand = value.price
            .toString()
            .replace(".", ",")
            .split(",");
        return (
          <Card
            key={index}
            style={{
              width: "14rem",
              marginBottom: "1rem",
              marginLeft: "0.5rem",
              marginRight: "0.5rem",
              paddingBottom: "6.5rem"
            }}
          >
            <Card.Img variant="top" src="img/mock.jpeg" />
            <Card.Body>
              <Card.Title>{value.name}</Card.Title>
              <Card.Text>
                <p className="rating-label">
                  <ReactStars
                    color2={"gold"}
                    size={20}
                    count={5}
                    value={value.rate}
                    edit={false}
                  />
                </p>

                <p className="price-label">
                  {value.price > 1000 ? (
                    <React.Fragment>
                      <span style={{ fontSize: 22 }}>{price[0]}</span>
                      <span style={{ marginLeft: "6px" }}>
                        <span style={{ fontSize: 22 }}>{pre[0]}</span>
                        {","}
                        {pre[1] ? (
                          <React.Fragment>
                            {pre[1].length != 1 ? (
                              pre[1]
                            ) : (
                              <React.Fragment>
                                {pre[1]}
                                {"0"}
                              </React.Fragment>
                            )}
                          </React.Fragment>
                        ) : (
                          "00"
                        )}
                      </span>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <span style={{ fontSize: 22 }}>
                        {priceLessThanThousand[0]}
                      </span>
                      {","}
                      {priceLessThanThousand[1] ? (
                        <React.Fragment>
                          {priceLessThanThousand[1].length != 1 ? (
                            <React.Fragment>
                              {priceLessThanThousand[1]}
                            </React.Fragment>
                          ) : (
                            <React.Fragment>
                              {priceLessThanThousand[1]}
                              {"0"}
                            </React.Fragment>
                          )}
                        </React.Fragment>
                      ) : (
                        <React.Fragment>{"00"}</React.Fragment>
                      )}
                    </React.Fragment>
                  )}{" "}
                  {value.currency}
                </p>
              </Card.Text>
              <Button className="button-link" variant="warning">
                Szczegóły
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </Col>
  );
};
