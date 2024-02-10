console.log('Project 5');
const insert = document.querySelector('#insert');
window.addEventListener('keypress', function (e) {
  insert.innerHTML = `
  <div class = "color">
    <table>
    <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    </tr>
    </table>
  </div>
 `;
});
