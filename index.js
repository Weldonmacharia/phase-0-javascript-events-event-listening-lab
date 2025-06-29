function addingEventListener() {
  const button = document.getElementById('button');

  function clickAlert() {
    alert('I was clicked!');
  }

  button.addEventListener('click', clickAlert);
}

document.addEventListener('DOMContentLoaded', () => {
  addingEventListener();
});
