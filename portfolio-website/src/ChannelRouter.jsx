import { useState } from "react";
import TVFlipTransition from "./effects/TVFlipTransition";
import ChannelAbout from "./crtcomponents/ChannelAbout";
import ChannelProjects from "./crtcomponents/ChannelProjects";
import ChannelExperience from "./crtcomponents/ChannelExperience";
import ChannelContact from "./crtcomponents/ChannelContact";

const channels = [ChannelAbout, ChannelProjects, ChannelExperience, ChannelContact];

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
        className="fixed top-4 right-4 bg-white px-4 py-2 z-[9999] font-mono"
      >
        ▶ Next Channel
      </button>
      <TVFlipTransition show={flipping} />
      <ChannelComponent />
    </>
  );
}
