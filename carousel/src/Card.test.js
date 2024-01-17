import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

const testImage = TEST_IMAGES[0];
const testCardIdx = 1;
const totalNum = TEST_IMAGES.length;

it("has all required DOM elements", function () {
  const { container } = render(
    <Card
      caption={testImage.caption}
      src={testImage.src}
      currNum={testCardIdx}
      totalNum={totalNum}
    />
  );
  expect(container).toContainHTML(testImage.caption);
  expect(container).toContainHTML(testImage.src);
  expect(container).toContainHTML(`Image ${testCardIdx} of ${totalNum}`);

  const image = container.querySelector('img');
  expect(image.getAttribute('alt')).toEqual(testImage.caption);
  expect(image.getAttribute('src')).toEqual(testImage.src);
});

it("renders without crashing (smoke test)", function () {
  render(
    <Card
      caption={testImage.caption}
      src={testImage.src}
      currNum={testCardIdx}
      totalNum={totalNum}
    />
  );
});

it("matches snapshot", function () {
  const { container } = render(
    <Card
      caption={testImage.caption}
      src={testImage.src}
      currNum={testCardIdx}
      totalNum={totalNum}
    />
  );
  expect(container).toMatchSnapshot();
});

// add tests like "does the card have particular info in it"
// make sure the type of card has the info we expect it to on the page