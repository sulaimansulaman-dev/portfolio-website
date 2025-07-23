import { useState } from "react";
import TVFlipTransition from "./effects/TVFlipTransition";



import About from "./crtcomponents/ChannelAbout";
import Experience from "./crtcomponents/ChannelExperience";
import Projects from "./crtcomponents/ChannelProjects";
import Education from "./crtcomponents/ChannelEducation.jsx";
import Skills from "./crtcomponents/ChannelSkills";
import Contact from "./crtcomponents/ChannelContact";




const channels = [ About, Experience, Projects, Education, Skills, Contact];

export default function ChannelRouter() {
  const [channel, setChannel] = useState(0);
  const [flipping, setFlipping] = useState(false);

  const nextChannel = () => {
    setFlipping(true);
    setTimeout(() => {
      setChannel((prev) => (prev + 1) % channels.length);
      setFlipping(false);
    }, 500);
  };

  const ChannelComponent = channels[channel];

  return (
    <>
      <button
        onClick={nextChannel}
        className="fixed bottom-4 right-4 bg-white px-4 py-0 z-[9999] font-mono"
      >
        ▶ Next Channel
      </button>
      <TVFlipTransition show={flipping} />
      <ChannelComponent />
    </>
  );
}
