// Слоганы
const slogans = [
  "Подача трезвого водителя за 15 минут — безопасно и надёжно",
  "Опытные водители доставят вас и вашу машину домой",
  "15 минут ожидания — и вы в пути с трезвым профессионалом",
  "Безопасная дорога домой с опытным водителем",
  "Трезвый водитель к вашему автомобилю за 15 минут",
  "Мы приедем за 15 минут и доставим вас без риска",
  "Профессиональные водители для вашей безопасности",
  "15 минут — и ваша поездка под надёжным контролем"
];

const sloganElement = document.getElementById('slogan');
let currentSloganIndex = 0;

// Показать первый слоган
sloganElement.textContent = slogans[0];

// Менять слоганы каждые 4 секунды
setInterval(() => {
  currentSloganIndex = (currentSloganIndex + 1) % slogans.length;
  sloganElement.style.opacity = 0;
  setTimeout(() => {
    sloganElement.textContent = slogans[currentSloganIndex];
    sloganElement.style.opacity = 1;
  }, 300);
}, 4000);

// Модальное окно
const modal = document.getElementById('callModal');

function openCallModal() {
  modal.style.display = 'flex';
}

function closeCallModal() {
  modal.style.display = 'none';
}

// WhatsApp с готовым текстом
function openWhatsApp() {
  const phoneNumber = "+79991234567";
  const message = encodeURIComponent("Здравствуйте! Хочу вызвать трезвого водителя Premier. Могу ли я получить помощь?");
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  closeCallModal();
}

// Звонок
function callNow() {
  window.location.href = "tel:+79991234567";
  closeCallModal();
}

// Закрытие модалки по клику вне
window.onclick = function(event) {
  if (event.target === modal) {
    closeCallModal();
  }
};
