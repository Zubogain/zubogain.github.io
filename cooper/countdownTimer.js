document.addEventListener("DOMContentLoaded", () => {
  const countdown = document.getElementById("countdown");
  const countdownNumbers = countdown.getElementsByClassName(
    "header__countdown__item__number"
  );
  const countdownDate = new Date("Jan 5, 2020 15:37:25").getTime();

  const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    let dateString = "";
    dateString += Math.floor(distance / (1000 * 60 * 60 * 24));
    dateString += Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    dateString += Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log(seconds);

    for (i = 0; i < countdownNumbers.length; i++) {
      if (dateString[i]) {
        countdownNumbers[i].textContent = dateString[i];
        if (
          countdownNumbers[i].classList.contains(
            "header__countdown__item__number__expired"
          )
        ) {
          countdownNumbers[i].classList.remove(
            "header__countdown__item__number__expired"
          );
        }
      } else {
        countdownNumbers[i].classList.add(
          "header__countdown__item__number__expired"
        );
      }
    }
  }, 1000);
});
