// Dark/Light theme toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const icon = document.getElementById("theme-toggle");
  icon.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}); 

// Form submission feedback
document.getElementById("applyForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "✅ Application submitted successfully!";
  this.reset();
});
