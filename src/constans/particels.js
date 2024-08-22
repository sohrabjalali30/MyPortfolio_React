export const Yet = {
  fpsLimit: 60,
particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "images/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.7,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 100,
      random: true,
      anim: {
        enable: true,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 1,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
        parallax: {
          enable: false,
          force: 60,
          smooth: 10
        }
      },
      onClick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        lineLinked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 150,
        duration: 2,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 200
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  backgroundMask: {
    enable: true,
    cover: {
      color: {
        value: "#000"
      }
    }
  },
  retina_detect: true
};
/* 2 */
export const masling = {
  fpsLimit: 60,
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 1,
      random: false
    },
    size: {
      value: 50,
      random: true
    },
    lineLinked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 1,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onHover: {
        enable: true,
        mode: "bubble"
      },
      onClick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        lineLinked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 200,
        duration: 2,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 200
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },

  backgroundMask: {
    enable: true,
    cover: {
       value: {
        r: 255,
        g: 255,
        b: 255
      }
    }
  },
  retina_detect: true
};

export const Liner = {
  fps_limit: 60,
  interactivity: {
    detect_on: "canvas",
    events: {
      onclick: { enable: true, mode: "push" },
      onhover: {
        enable: true,
        mode: "attract",
        parallax: { enable: false, force: 60, smooth: 10 }
      },
      resize: true
    },
    modes: {
      push: { quantity: 4 },
      attract: { distance: 200, duration: 0.4, factor: 5 }
    }
  },
  particles: {
    color: { value: "#820300" },
    line_linked: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: "none",
      enable: true,
      out_mode: "out",
      random: false,
      speed: 2,
      straight: false
    },
    number: { density: { enable: true, value_area: 800 }, value: 80 },
    opacity: {
      anim: { enable: false, opacity_min: 0.1, speed: 3, sync: false },
      random: false,
      value: 0.5
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400"
      },
      image: {
        height: 100,
        replace_color: true,
        src: "images/github.svg",
        width: 100
      },
      polygon: { nb_sides: 5 },
      stroke: { color: "#000000", width: 0 },
      type: "circle"
    },
    size: {
      anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
      random: true,
      value: 5
    }
  },
  polygon: {
    draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
    move: { radius: 10 },
    scale: 1,
    type: "none",
    url: ""
  },
  retina_detect: true
};
