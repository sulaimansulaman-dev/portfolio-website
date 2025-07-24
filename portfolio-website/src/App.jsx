import { useState } from "react";
import CRTContainer from "./CRTContainer";
import ChannelRouter from "./ChannelRouter";

export default function App() {
  const [channel, setChannel] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const TOTAL_CHANNELS = 6;

  const channelNames = [
    "About",
    "Experience",
    "Projects",
    "Education",
    "Skills",
    "Contact",
  ];

  const nextChannel = () => {
    setFlipping(true);
    setTimeout(() => {
      setChannel((prev) => (prev + 1) % TOTAL_CHANNELS);
      setFlipping(false);
    }, 500);
  };

  const prevChannel = () => {
    setFlipping(true);
    setTimeout(() => {
      setChannel((prev) => (prev - 1 + TOTAL_CHANNELS) % TOTAL_CHANNELS);
      setFlipping(false);
    }, 500);
  };

  const selectChannel = (index) => {
    if (index === channel) return;
    setFlipping(true);
    setTimeout(() => {
      setChannel(index);
      setFlipping(false);
    }, 500);
  };

  return (
    <CRTContainer
      onNext={nextChannel}
      onPrev={prevChannel}
      onSelectChannel={selectChannel}
      currentChannel={channel}
      channelNames={channelNames}  // <-- pass channel names here
    >
      <ChannelRouter channel={channel} flipping={flipping} />
    </CRTContainer>
  );
}
