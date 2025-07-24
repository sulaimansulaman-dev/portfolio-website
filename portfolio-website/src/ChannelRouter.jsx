import { useState } from "react";
import TVFlipTransition from "./effects/TVFlipTransition";

import About from "./crtcomponents/ChannelAbout";
import Experience from "./crtcomponents/ChannelExperience";
import Projects from "./crtcomponents/ChannelProjects";
import Education from "./crtcomponents/ChannelEducation.jsx";
import Skills from "./crtcomponents/ChannelSkills";
import Contact from "./crtcomponents/ChannelContact";

const channels = [About, Experience, Projects, Education, Skills, Contact];

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

  const prevChannel = () => {
    setFlipping(true);
    setTimeout(() => {
      setChannel((prev) => (prev - 1 + channels.length) % channels.length);
      setFlipping(false);
    }, 500);
  };

  const ChannelComponent = channels[channel];

  return (
    <div className="relative w-full h-full">
      <TVFlipTransition show={flipping} />
      <ChannelComponent />

      {/* Previous Button */}
      <button
        onClick={prevChannel}
        className="fixed bottom-4 left-5 bg-white px-4 py-0 z-[9999] font-mono"
      >
        ◀ Previous
      </button>

      {/* Next Button */}
      <button
        onClick={nextChannel}
        className=" fixed bottom-4 right-12 bg-white px-4 py-0 z-[9999] font-mono "
      >
        ▶ Next
      </button>
    </div>
  );
}
