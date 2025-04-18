function launchAlexa() {
  window.location.href = "alexa://";
}

function launchAmazonMusic() {
  window.location.href = "music://";
}

function openChatGPT() {
  window.open("https://chat.openai.com", "_blank");
}

function openGauthMath() {
  window.open("https://www.gauthmath.com", "_blank");
}

function submitText() {
  const input = document.getElementById("inputField").value;
  if (input.toLowerCase().includes("math")) {
    openGauthMath();
  } else {
    openChatGPT();
  }
}

function activateSpeech() {
  const utterance = new SpeechSynthesisUtterance("Hello, how can I assist you?");
  speechSynthesis.speak(utterance);
}

function openCamera() {
  alert("Use iOS Shortcut to take a photo and send to Jarvis");
}
