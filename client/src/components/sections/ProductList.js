import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import ReactStars from "react-stars";

export default withRouter(props => {
  const { products, rest } = props;
  return (
    <Col {...rest} className="products-list">
      {props.children}
      {products.map((value, index) => {
        console.log(value);
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
            className="products-list__item"
          >
            <Card.Body>
              <div
                style={{ backgroundImage: `url('img/${value.hero_image}')` }}
                className="product-image"
              />
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
              <Button
                className="button-link"
                variant="warning"
                onClick={() => this.props.history(`/categories/${2 + 2}`)}
              >
                Szczegóły
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </Col>
  );
});
