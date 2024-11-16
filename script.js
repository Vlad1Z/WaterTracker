function navigateTo(url) {
  window.location.href = url;
}

function calculateWater() {
  const weight = document.getElementById('weight').value;
  const activity = document.getElementById('activity').value;

  if (!weight || !activity) {
    alert('Пожалуйста, заполните все поля.');
    return;
  }

  let waterIntake = weight * 30; // Расчет базовой нормы воды (мл на кг веса)

  // Добавляем коррекцию по уровню активности
  switch (activity) {
    case 'low':
      waterIntake *= 1.0;
      break;
    case 'medium':
      waterIntake *= 1.2;
      break;
    case 'high':
      waterIntake *= 1.4;
      break;
  }

  alert(`Ваша норма воды: ${Math.round(waterIntake)} мл в день.`);
}
