import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

const testCard = {
  caption: "test card",
  src: "/test/test.png"
};
const testCardIdx = 1;
const totalNum = 3;

it("renders without crashing (smoke test)", function () {
  render(
    <Card
      caption={testCard.caption}
      src={testCard.src}
      currNum={testCardIdx}
      totalNum={totalNum}
    />
  );
});

it("matches snapshot", function () {
  const { container } = render(
    <Card
      caption={testCard.caption}
      src={testCard.src}
      currNum={testCardIdx}
      totalNum={totalNum}
    />
  );
  expect(container).toMatchSnapshot();
});
