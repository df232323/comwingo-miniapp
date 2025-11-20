console.log("Mini App loaded");
document.querySelectorAll(".platform").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".platform").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("platformInput").value = btn.dataset.platform;
  };
});
function generateCode(){ return Math.floor(1000 + Math.random()*9000); }
const modal=document.getElementById("successModal");
const trackCodeDisplay=document.getElementById("trackCodeDisplay");
document.getElementById("requestForm").onsubmit = e => {
  e.preventDefault();
  const code = generateCode();
  trackCodeDisplay.textContent = code;
  modal.classList.add("visible");
};
document.getElementById("closeModalBtn").onclick = () => modal.classList.remove("visible");
document.getElementById("copyCodeBtn").onclick = async () => {
  await navigator.clipboard.writeText(trackCodeDisplay.textContent);
  alert("Код скопирован!");
};