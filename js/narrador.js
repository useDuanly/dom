const d = document,
  w = window;

export default function speechReader() {
  const $speechSelect = d.getElementById("speech-select"),
    $speechTexTarea = d.getElementById("speech-text"),
    $speechBtn = d.getElementById("speech-btn"),
    $fragment = d.createDocumentFragment(),
    speechMessage = new SpeechSynthesisUtterance();
  // console.log(speechMessage);

  let voices = [];

  d.addEventListener("DOMContentLoaded", () => {
    w.speechSynthesis.addEventListener("voiceschanged", () => {
      voices = w.speechSynthesis.getVoices();
      // console.log(voices);
      voices.forEach((voice) => {
        //console.log(voice.name);
        const $option = d.createElement("option");
        $option.value = voice.name;
        $option.textContent = `${voice.name} - ${voice.lang}`;

        $fragment.appendChild($option);
        $speechSelect.appendChild($fragment);
      });
    });
  });
  d.addEventListener("change", (e) => {
    console.log(e);
    if (e.target === $speechSelect) {
      speechMessage.voice.find((voice) => voice.name === e.target.value);
    }
    console.log(speechMessage);
  });
  d.addEventListener("click", (e) => {
    if (e.target === $speechBtn) {
      speechMessage.text = $speechTexTarea.value;
      window.speechSynthesis.speak(speechMessage);
    }
  });
}
