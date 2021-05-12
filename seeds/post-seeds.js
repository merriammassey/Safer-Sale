const { Post } = require("../models");

const postdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    description:
      "this is just aplace holding description for the website, jhdfjdfjhdfsjhdfsajhdf",
    price: 35.0,
    user_id: 10,
    image: "",
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    description:
      "this is just aplace holding description for the website, jhdfjdfjhdfsjhdfsajhdfs",
    price: 35.0,
    user_id: 8,
    image: "",
  },
  {
    title:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    description:
      "this is just aplace holding description for the website, jhdfjdfjhdfsjhdfsajhdfs",
    price: 45.0,
    user_id: 1,
    image: "",
  },
  {
    title: "Nunc purus.",
    description:
      "this is just aplace holding description for the website, jhdfjdfjhdfsjhdfsajhdfs",
    price: 30.0,
    user_id: 4,
    image: "",
  },
  {
    title: "Pellentesque eget nunc.",
    description:
      "this is just aplace holding description for the website, jhdfjdfjhdfsjhdfsajhdfs",
    price: 22.0,
    user_id: 7,
    image: "",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    description:
      "this is just aplace holding description for the website,jhdfjdfjhdfsjhdfsajhdfs",
    price: 10.0,
    user_id: 4,
    image: "",
  },
  {
    title: "In hac habitasse platea dictumst.",
    description:
      "this is just aplace holding description for the website, jhdfjdfjhdfsjhdfsajhdfs",
    price: 65.0,
    user_id: 1,
    image: "",
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    description:
      "this is just aplace holding description for the website, jhdfjdfjhdfsjhdfsajhdfs",
    price: 65.0,
    user_id: 1,
    image: "",
  },
  {
    title: "Duis ac nibh.",
    description:
      "this is just aplace holding description for the website, jhdfjdfjhdfsjhdfsajhdfs",
    price: 65.0,
    user_id: 9,
    image: "",
  },
  {
    title: "Curabitur at ipsum ac tellus semper interdum.",
    description:
      "this is just aplace holding description for the website, jhdfjdfjhdfsjhdfsajhdfs",
    price: 65.0,
    user_id: 5,
    image: "",
  },
  {
    title: "In hac habitasse platea dictumst.",
    description:
      "this is just aplace holding description for the website, jhdfjdfjhdfsjhdfsajhdfsn",
    price: 30.0,
    user_id: 3,
    image: "",
  },
  {
    title: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    description:
      "this is just aplace holding description for the website, jhdfjdfjhdfsjhdfsajhdfs",
    price: 30.0,
    user_id: 10,
    image: "",
  },
  {
    title: "Donec dapibus.",
    description:
      "this is just aplace holding description for the website, jhdfjdfjhdfsjhdfsajhdfs",
    price: 30.0,
    user_id: 8,
    image: "",
  },
  {
    title: "Nulla tellus.",
    description:
      "this is just aplace holding description for the website, jhdfjdfjhdfsjhdfsajhdfs",
    price: 30.0,
    user_id: 3,
    image: "",
  },
  {
    title:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    description:
      "this is just aplace holding description for the website, jhdfjdfjhdfsjhdfsajhdfs",
    price: 30.0,
    user_id: 3,
    image: "",
  },
  {
    title:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    description:
      "this is just aplace holding description for the website, jhdfjdfjhdfsjhdfsajhdfs",
    price: 30.0,
    user_id: 7,
    image: "",
  },
  {
    title: "In hac habitasse platea dictumst.",
    description:
      "this is just aplace holding description for the website, jhdfjdfjhdfsjhdfsajhdfs",
    price: 30.0,
    user_id: 6,
    image: "",
  },
  {
    title: "Etiam justo.",
    description:
      "this is just aplace holding description for the website, jhdfjdfjhdfsjhdfsajhdfs",
    price: 30.0,
    user_id: 4,
    image: "",
  },
  {
    title: "Nulla ut erat id mauris vulputate elementum.",
    description:
      "this is just aplace holding description for the website, jhdfjdfjhdfsjhdfsajhdfs",
    price: 30.0,
    user_id: 6,
    image: "",
  },
  {
    title:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    description:
      "this is just aplace holding description for the website, jhdfjdfjhdfsjhdfsajhdfs",
    price: 30.0,
    user_id: 7,
    image: "",
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
