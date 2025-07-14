async function sendMessage() {
  const input = document.getElementById("user-input");
  const log = document.getElementById("chat-log");
  const message = input.value.trim();
  if (!message) return;

  log.innerHTML += `<div><strong>You:</strong> ${message}</div>`;
  input.value = "";

  try {
    const res = await fetch("https://peng-openapi-chat.vercel.app/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const { reply } = await res.json();
    log.innerHTML += `<div><strong>Bot:</strong> ${reply}</div>`;
    log.scrollTop = log.scrollHeight;
  } catch (e) {
    log.innerHTML += `<div style="color:red"><strong>Error:</strong> Chatbot unavailable.</div>`;
  }
}
