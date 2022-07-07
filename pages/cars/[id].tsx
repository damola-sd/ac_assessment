import React, { ReactNode } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps, NextPage } from "next";
import { baseUrl } from "../../utils/base";
import styles from "../../styles/Detail.module.css";
import Layout from "../../components/Layout";

import DeliverySection from "../../components/DeliverySection";
import BottomSection from "../../components/BottomSection";
import carSample from "../../public/images/car_sample.jpg";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { CarMedia } from "../../utils/types";

function DetailsPage({ car, media }: any) {
  console.log(car);
  return (
    <>
      <Head>
        <title>{car.carName}</title>
        <meta name="description" content={car.carName} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div>
            <Image
              src={car.imageUrl ? car.imageUrl : carSample}
              alt={car.carName}
              className={styles.carImage}
              width="500"
              height="500"
            />
          </div>
          <div>
            <div className={styles.carName}>{car.carName}</div>
            <div>Engine Type: {car.engineType}</div>
            <div>Exterior Color: {car.exteriorColor}</div>
            <div>Fuel Type: {car.fuelType}</div>
            <div>State: {car.state}</div>
            <div>Year: {car.year}</div>
          </div>
        </div>
        <h3>Media</h3>
        <div className="my-2">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={45}
            totalSlides={media.length}
          >
            <Slider>
              {media.map(
                (result: CarMedia, i: number) =>
                  result.url &&
                  (!result.type.includes("video") ? (
                    <Slide key={i} index={i}>
                      <Image
                        key={result.id}
                        src={result.url}
                        width="500"
                        height="500"
                        alt={`${car.carName} ${result.name}`}
                      />
                    </Slide>
                  ) : (
                    <Slide index={i}>
                      <video width="500" height="500" controls>
                        <source src={result.url} type="video/mp4"></source>
                      </video>
                    </Slide>
                  ))
              )}
            </Slider>
            <ButtonBack className="btn btn-blue p-2 rounded bg-blue-500 mx-3 hover:-translate-y-1 text-white">
              Previous Media
            </ButtonBack>
            <ButtonNext className="btn btn-blue p-2 rounded bg-blue-500 hover:-translate-y-1 mx-3 text-white">
              Next Media
            </ButtonNext>
          </CarouselProvider>
        </div>
      </div>
      <DeliverySection />
      <BottomSection />
    </>
  );
}

DetailsPage.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const carDetailsRes = await fetch(`${baseUrl}/car/${context.query.id}`);
  const carMedia = await fetch(
    `${baseUrl}/car_media?carId=${context.query.id}`
  );

  const car = await carDetailsRes.json();
  const media = await carMedia.json();

  return {
    props: {
      car,
      media: media.carMediaList,
    },
  };
};

export default DetailsPage;
