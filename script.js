function addRecommendation() {
  const input = document.getElementById('newRecommendation');
  const value = input.value.trim();
  if (value) {
    const list = document.getElementById('recommendationList');
    const li = document.createElement('li');
    li.textContent = value;
    list.appendChild(li);
    input.value = '';
    alert('Thank you for your recommendation!');
  }
}
