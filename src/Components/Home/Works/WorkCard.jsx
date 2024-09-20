import React from "react";
import styles from "./work.module.css";
import { Button } from "flowbite-react";
import { HiArrowUpRight } from "react-icons/hi2";

function WorkCard({ src, title, desc, h, h2 }) {
  return (
    <>
      <h1 className="text-4xl font-bold text-center text-purple-600">
        {h} <span className="text-black">{h2}</span>
      </h1>
      <div className={styles.main}>
        <div className={styles.outerContainer}>
          <div className={styles.descContainerCF}>
            <h2>{title}</h2>
            <p>{desc}</p>
            <div className="flex mt-4 ml-8 ">
              <Button>
                Learn more <HiArrowUpRight />
              </Button>
            </div>
          </div>
          <div className={styles.imgContainerCF}>
            <img src={src} />
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkCard;
