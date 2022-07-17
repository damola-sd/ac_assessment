import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Parallax from "../components/Parrallax";
import DeliverySection from "../components/DeliverySection";
import BottomSection from "../components/BottomSection";

import { FaChevronRight } from "react-icons/fa";

import {
  CarBrand,
  Car,
  GetAllCarsResults,
  GetPopularMakesResults,
} from "../utils/types";

import styles from "../styles/Home.module.css";
import carSample from "../public/images/car_sample.jpg";
import carSample1 from "../public/images/car_sample_1.jpg";
import carSample2 from "../public/images/car_sample_2.jpg";
import carBg from "../public/images/car-bg.jpg";
import Pagination from "@etchteam/next-pagination";

import { baseUrl } from "../utils/base";

const Home: NextPage<{
  brands: CarBrand[];
  cars: Car[];
  totalCount: number;
}> = ({ brands, cars, totalCount }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>AutoChek Car Sales</title>
        <meta name="description" content="Autochek Car Sales" />
        <Link href={`/`}>
          <link rel="icon" href="/favicon.ico" />
        </Link>
      </Head>
      <Nav />

      <h1 className={styles.productHeader}>
        <span className={styles.eachChar}>N</span>ew{" "}
        <span className={styles.eachChar}>C</span>ars
      </h1>

      <div className={styles.mainBrand}>
        <div className={styles.carSection}>
          {cars.map((result: any) => (
            <div key={result.id} className={styles.carsContainer}>
              <Image
                className="rounded-md"
                src={result.imageUrl ? result.imageUrl : carSample}
                alt="Cars"
                width="200"
                height="200"
              />
              <span className="text-slate-500">{result.sellingCondition}</span>
              <a>
                <h3>
                  {result.title.length > 20
                    ? `${result.title.substring(0, 20)}...(${result.year})`
                    : `${result.title} (${result.year})`}
                </h3>
              </a>
              <div className="flex text-xs space-x-3 m-2">
                <span className="text-slate-500">
                  {(result.city + "," + result.state).length > 12
                    ? `${result.state}`
                    : `${result.city}, ${result.state}`}
                </span>

                <span className="text-slate-500">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "NGN",
                  }).format(result.marketplacePrice)}
                </span>
              </div>
              <Link href={`/cars/${result.id}`}>
                <a>
                  <h3 className={styles.viewDetails}>VIEW DETAILS</h3>
                </a>
              </Link>
            </div>
          ))}
          <div className="mb-2">
            <Pagination total={totalCount} />
          </div>
        </div>
        <div className={styles.priceSection}>
          <h2>Search Here</h2>
          <div className={styles.productSearch}>
            <input type="text" placeholder="Product name..." />
            <div>
              <FaChevronRight color="#fff" size={20} />
            </div>
          </div>
          <h2>Price</h2>
          <div className={styles.underPrice}>
            <p>Under $1,000</p>
            <p>$1,000 - $5,000</p>
            <p>$5,000 - $10,000</p>
            <p>$10,000 - $20,000</p>
            <p>$20,000 $30,000</p>
            <p>Over $30,000</p>
          </div>
          <h2>Discount</h2>
          <form className={styles.form}>
            <input type="checkbox" id="first-here" name="first-here" />
            <label className={styles.checkLabel} htmlFor="first-here">
              5% or More
            </label>
            <div className={styles.separator}></div>
            <input type="checkbox" id="second" name="second" />
            <label className={styles.checkLabel} htmlFor="second">
              10% or More
            </label>
            <div className={styles.separator}></div>
            <input type="checkbox" id="third" name="third" />
            <label className={styles.checkLabel} htmlFor="third">
              20% or More
            </label>
            <div className={styles.separator}></div>
            <input type="checkbox" id="fourth" name="fourth" />
            <label className={styles.checkLabel} htmlFor="fourth">
              30% or More
            </label>
            <div className={styles.separator}></div>
            <input type="checkbox" id="fifth" name="fifth" />
            <label className={styles.checkLabel} htmlFor="fifth">
              50% or More
            </label>
            <div className={styles.separator}></div>
            <input type="checkbox" id="sixth" name="sixth" />
            <label className={styles.checkLabel} htmlFor="sixth">
              60% or More
            </label>
            <div className={styles.separator}></div>
          </form>

          <h2>Models</h2>
          <form className={styles.form}>
            {brands.map((result) => (
              <div key={result.name}>
                <input type="checkbox" id="first-next" name={result.name} />
                <label className={styles.checkLabel} htmlFor="first-next">
                  {result.name}
                </label>
                <div className={styles.separator}></div>
              </div>
            ))}
          </form>

          <h2>Discount</h2>
          <form className={styles.form}>
            <input type="checkbox" id="first-last" name="first-last" />
            <label className={styles.checkLabel} htmlFor="first-last">
              Eligible for Cash On Delivery
            </label>
            <div className={styles.separator}></div>
          </form>

          <h2>New Arrivals</h2>
          <form className={styles.form}>
            <input type="checkbox" id="first-end" name="first-end" />
            <label className={styles.checkLabel} htmlFor="first-end">
              Last 30 Days
            </label>
            <div className={styles.separator}></div>
            <input type="checkbox" id="first" name="first" />
            <label className={styles.checkLabel} htmlFor="first">
              Last 90 Days
            </label>
            <div className={styles.separator}></div>
          </form>
        </div>
      </div>

      <Parallax bg="url('https://images.hgmsites.net/lrg/2018-acura-nsx_100618872_l.jpg')">
        <div className={styles.parallax}>
          <div>
            <div>
              <h3>Expensive, Sleek & Blazing Fast</h3>
              <h1>SuperCars</h1>
              <h4>Sale up to 25% off all in store location</h4>
            </div>
            <div>
              <Image
                className="rounded"
                src={carSample1}
                alt="Cars"
                width="200"
                height="200"
              />
            </div>
          </div>
          <div>
            <div>
              <h3>Solid, All-Weather, Sporty</h3>
              <h1>SUVs</h1>
              <h4>Free shipping on orders</h4>
            </div>
            <div>
              <Image
                className="rounded"
                src={carSample2}
                alt="Cars"
                width="200"
                height="200"
              />
            </div>
          </div>
        </div>
      </Parallax>
      <DeliverySection />
      <BottomSection />
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const [carsResults, brandsResults] = await Promise.all([
    fetch(`${baseUrl}/car/search`),
    fetch(`${baseUrl}/make?popular=true`),
  ]);
  const [carsData, brandsData] = await Promise.all([
    carsResults.json(),
    brandsResults.json(),
  ]);

  return {
    props: {
      cars: carsData.result,
      brands: brandsData.makeList,
      totalCount: carsData.pagination.total,
    },
  };
};

{
  /* <style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Lato;
  }

  * {
    box-sizing: border-box;
  }
`}</style>; */
}

export default Home;
