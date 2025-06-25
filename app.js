
const endpoint = "https://script.google.com/macros/s/AKfycbxE8HVmFwJcgDo7G1K4DPiKqop1T6c8Y3PcZ-eeLJhTdlYqkqESEYPaIC7i_wRWUDr_/exec";

function submitPhoneLog(number, isCollecting) {
  const msg = document.getElementById("message");

  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      StudentNumber: number,
      Mode: isCollecting ? "collect" : "handin"
    })
  })
  .then(response => response.json())
  .then(data => {
    msg.textContent = data.message;
    msg.style.color = data.message.includes("✅") ? "green" : "red";
  })
  .catch(error => {
    console.error("Error:", error);
    msg.textContent = "Error logging student ❌";
    msg.style.color = "red";
  });
}
