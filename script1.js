// Save answers from Page 1
if (document.getElementById("form1")) {
    document.getElementById("form1").addEventListener("submit", function(e) {
      e.preventDefault();
      const answers = [
        document.querySelector('input[name="q1"]:checked').value,
        document.querySelector('input[name="q2"]:checked').value,
        document.querySelector('input[name="q3"]:checked').value,
        document.querySelector('input[name="q4"]:checked').value,
      ];
      localStorage.setItem("answers", JSON.stringify(answers));
      window.location.href = "page2.html";
    });
  }
  
  // Save answers from Page 2
  if (document.getElementById("form2")) {
    document.getElementById("form2").addEventListener("submit", function(e) {
      e.preventDefault();
      const prevAnswers = JSON.parse(localStorage.getItem("answers")) || [];
      const newAnswers = [
        document.querySelector('input[name="q5"]:checked').value,
        document.querySelector('input[name="q6"]:checked').value,
        document.querySelector('input[name="q7"]:checked').value,
        document.querySelector('input[name="q8"]:checked').value,
      ];
      const allAnswers = prevAnswers.concat(newAnswers);
      localStorage.setItem("answers", JSON.stringify(allAnswers));
      window.location.href = "results.html";
    });
  }
  