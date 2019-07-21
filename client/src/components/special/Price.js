import React from "react";

export default props => {
  let price = props.price.toString().split(""),
    pre = price
      .splice(1)
      .join("")
      .replace(".", ",")
      .split(","),
    priceLessThanThousand = props.price
      .toString()
      .replace(".", ",")
      .split(",");
  return (
    <p className={props.className}>
      {props.price > 1000 ? (
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
          <span style={{ fontSize: 22 }}>{priceLessThanThousand[0]}</span>
          {","}
          {priceLessThanThousand[1] ? (
            <React.Fragment>
              {priceLessThanThousand[1].length != 1 ? (
                <React.Fragment>{priceLessThanThousand[1]}</React.Fragment>
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
      {props.currency}
    </p>
  );
};
