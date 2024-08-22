import { Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { Liner } from "../../../constans/particels";

const DataHome = () => {
  const [init, setInit] = useState(false);
  const nameOb = useRef(null);
  const infoOb = useRef(null);

  const string = [
    "I am a web developer",
    "I am a web designer",
    "I love the web world",
  ];

  useEffect(() => {
    const typedName = new Typed(nameOb.current, {
      strings: ["Sohrab Jalali"],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 30,
      showCursor: false,
    });
    const typedInfo = new Typed(infoOb.current, {
      strings: string,
      startDelay: 1500,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 30,
      showCursor: false,
    });
    return () => {
      typedName.destroy();
      typedInfo.destroy();
    };
  });

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      <Particles
        id="tsparticles"
        init={init}
        loaded={particlesLoaded}
        options={Liner}
      />

      <Typography
        ref={nameOb}
        variant="h3"
        sx={{ color: "#DBE7C9", fontWeight: "bold" }}
      ></Typography>

      <Typography
        ref={infoOb}
        variant="h5"
        sx={{ color: "white", mt: 2 }}
      ></Typography>
    </>
  );
};
export default DataHome;
