const { useState, useEffect } = React;

const DrumPad = ({ id, onClick, audioSrc, displayText }) =>
React.createElement("div", { className: "drum-pad", id: id, onClick: onClick },
id,
React.createElement("audio", { id: id, className: "clip", src: audioSrc }));



const App = () => {
  const [display, setDisplay] = useState("");

  const playSound = (audioSrc, displayText) => {
    const audio = new Audio(audioSrc);
    audio.currentTime = 0;
    audio.play().catch(error => console.error("Error playing audio:", error));
    setDisplay(displayText);
  };

  const handleKeyPress = event => {
    const key = event.key.toUpperCase();
    const audioElement = document.getElementById(key);
    if (audioElement) {
      const audioSrc = audioElement.querySelector("audio").getAttribute("src");
      const displayText = audioElement.innerText;
      playSound(audioSrc, displayText);
    }
  };

  const handleClick = event => {
    const audioSrc = event.currentTarget.querySelector("audio").getAttribute("src");
    const displayText = event.currentTarget.innerText;
    playSound(audioSrc, displayText);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return /*#__PURE__*/(
    React.createElement("div", { id: "drum-machine" },
    React.createElement("div", { id: "display" }, display),
    React.createElement("div", { className: "drum-pads" },
    React.createElement(DrumPad, {
      id: "Q",
      onClick: handleClick,
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      displayText: "Q" }),

    React.createElement(DrumPad, {
      id: "W",
      onClick: handleClick,
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      displayText: "W" }),

    React.createElement(DrumPad, {
      id: "E",
      onClick: handleClick,
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      displayText: "E" }),

    React.createElement(DrumPad, {
      id: "A",
      onClick: handleClick,
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      displayText: "A" }),

    React.createElement(DrumPad, {
      id: "S",
      onClick: handleClick,
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      displayText: "S" }),

    React.createElement(DrumPad, {
      id: "D",
      onClick: handleClick,
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      displayText: "D" }),

    React.createElement(DrumPad, {
      id: "Z",
      onClick: handleClick,
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      displayText: "Z" }),

    React.createElement(DrumPad, {
      id: "X",
      onClick: handleClick,
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      displayText: "X" }),

    React.createElement(DrumPad, {
      id: "C",
      onClick: handleClick,
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      displayText: "C" }))));




};

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));