import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-blogs";
import Hero from "../components/home-page/hero";
const DummyPosts=[
  {
    title:'Getting started with nextJS',
    slug:'getting-started-with-nextJS',
    image:'getting-started-nextJS.png',
    date:'2022-02-10',
    excerpt:'NestJS is the react framework for production with built-In SSR.'
  },
  {
    title:'Getting started with nextJS2',
    slug:'getting-started-with-nextJS',
    image:'getting-started-nextJS.png',
    date:'2022-02-10',
    excerpt:'NestJS is the react framework for production with built-In SSR.'
  },
  {
    title:'Getting started with nextJS3',
    slug:'getting-started-with-nextJS',
    image:'getting-started-nextJS.png',
    date:'2022-02-10',
    excerpt:'NestJS is the react framework for production with built-In SSR.'
  },
  {
    title:'Getting started with nextJS4',
    slug:'getting-started-with-nextJS',
    image:'getting-started-nextJS.png',
    date:'2022-02-10',
    excerpt:'NestJS is the react framework for production with built-In SSR.'
  }
]
const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DummyPosts}/>
    </Fragment>
  );
};
export default HomePage;
