import TVFlipTransition from "./effects/TVFlipTransition";

import About from "./crtcomponents/ChannelAbout";
import Experience from "./crtcomponents/ChannelExperience";
import Projects from "./crtcomponents/ChannelProjects";
import Education from "./crtcomponents/ChannelEducation.jsx";
import Skills from "./crtcomponents/ChannelSkills";
import Contact from "./crtcomponents/ChannelContact";

const channels = [About, Experience, Projects, Education, Skills, Contact];

export default function ChannelRouter({ channel, flipping }) {
  const ChannelComponent = channels[channel];
  
  return (
    <div className="relative w-full h-full">
      <TVFlipTransition show={flipping} />
      <ChannelComponent />
    </div>
  );
}
