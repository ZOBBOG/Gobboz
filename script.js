
let life = 15;

function changeLife(amount) {
    life += amount;
    if (life < 0) life = 0;
    document.getElementById('lifeTotal').textContent = life;
}
