function addUser(){
    player1N = document.getElementById('pl1').value;
    player2N = document.getElementById('pl2').value;
    localStorage.setItem('player1N', player1N);
    localStorage.setItem('player2N', player2N);
    window.location = 'game_page.html';
}