function getRightClick() {
  document.addEventListener('contextmenu', (e) => {
    alert('right click catched');
    e.preventDefault();
  });
}

export default getRightClick;
