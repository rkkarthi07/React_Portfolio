import { useCallback , useState } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; 
const mode = document.getElementById('mode');

const Particle = () => {
    const[isDarkMode , setDarkMode ] = useState(false);
    mode.addEventListener('change', ()=>{
        setDarkMode(!isDarkMode);
    })
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles 
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            className=""
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes:{
                      push :{
                        particles_nb: 1,
                      }
                    }
                },
                particles: {
                    color: {
                        value: isDarkMode == false ? "#191970" : "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable:false,
                        opacity: 0.1,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 0.05,
                        straight: false,
                    },
                    opacity:{
                      anim :{
                        enable : true,
                        speed:1,
                        opacity_min:0.3,
                      },
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 700,
                        },
                        value: 80,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 0.8, max: 1.5},
                    },
                },
                detectRetina: true,
            }}
        />
    );
};
export default Particle;