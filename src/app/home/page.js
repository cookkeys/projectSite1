"use client"
import React, { useState } from "react";
import styles from "./home.module.css";
import {
  FaArrowAltCircleRight,
  FaBrain,
  FaCaretRight,
  FaDigitalTachograph,
  FaFonticons,
  FaInfo,
  FaInstagram,
  FaLightbulb,
  FaPencilRuler,
  FaProjectDiagram,
  FaRProject,
  FaRegLightbulb,
} from "react-icons/fa";
import Link from "next/link";
import { Button , Backdrop} from "@mui/material";
import { redirect } from "next/dist/server/api-utils";



export default function Page() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const [value, setValue] = useState(0)

  return (
    <div>
      <div className={styles.outer_div_1}>
        <p className={styles.text1}>We design digital products.</p>
        <p className={styles.text2}>
          Your brand, Your product, your big idea....it is worth pursuing. We
          believe in
          <br />
          creating opportunities for elite brands, intrepid startups, and
          passionate
          <br /> innovators to change the world.
        </p>
      </div>
      <div className={styles.outer_div_2}>
        <div className={styles.box1}>
          <FaRegLightbulb className={styles.icon1} />
          <p className={styles.text3}>IDEA</p>
        </div>
        <div className={styles.box2}>
          <FaPencilRuler className={styles.icon2} />
          <p className={styles.text3}>DESIGN</p>
        </div>

        <div className={styles.box3}>
          <FaBrain className={styles.icon3} />
          <p className={styles.text3}>DEVELOPMENT</p>
        </div>

        <div className={styles.box4}>
          <FaDigitalTachograph className={styles.icon4} />
          <p className={styles.text3}>SUCCESS</p>
        </div>
      </div>

      <div className={styles.outer_div_3}>
        <div className={styles.inner_div_3_1}>
          <p className={styles.text4}>
            We design <br /> delightful digital <br />
            experiences
          </p>
          <p className={styles.text5}>
            Your brand, Your product, your big idea....it is worth pursuing.<br/> We
            believe in creating opportunities for elite brands, intrepid<br/>
            startups, and passionate innovators to change the world.
          </p>
          <Link href=" "><button className={styles.button1}>Contact Us</button></Link>
        </div>


        <div className={styles.inner_div_3_2}>
            <p>  <FaRProject/> </p>
            <p>  <FaProjectDiagram/></p>
            <p>  <FaFonticons/> </p>
            <p>  <FaRProject/> </p>
            <p>  <FaProjectDiagram/></p>
            <p>  <FaFonticons/> </p>
            <p>  <FaRProject/> </p>
            <p>  <FaProjectDiagram/></p>
            <p>  <FaFonticons/> </p>
        </div>
  
      </div>

      <div className={styles.outer_div_4}>

            {
                value === 0 ? <p>Two things are infinite: the universe and human stupidity; and Im not sure about the universe.
                ― Albert Einstein</p>
                : value === 1 ? <p> There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.
                ― Albert Einstein</p>
                : value === 2 ? <p>I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.
                ― Albert Einstein</p>
                : value === 3 ? <p>If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.
                ― Nikola Tesla</p>
                : value === 4 ? <p>The day science begins to study non-physical phenomena, it will make more progress in one decade than in all the previous centuries of its existence.
                ― Nikola Tesla</p>
                : null
            }

        <div className={styles.inner_div_4}>
            <FaCaretRight  onClick={()=>setValue((value+1)%5)}  className={styles.icon5}/>
        </div>

          {/* <Backdrop  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={false}
        >bkj</Backdrop> */}
      </div>
    </div>
  );
}
