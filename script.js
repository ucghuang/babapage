document.addEventListener('DOMContentLoaded', () => {
    const dinosaur = document.getElementById('dinosaur');
    const obstacle = document.getElementById('obstacle');

    let isJumping = false;
    let gravity = 0.9;
    let dinoBottom = 0;
    let obstacleLeft = 500;
    let isGameOver = false;

    function jump() {
        if (isJumping) return;
        isJumping = true;
        let upTimerId = setInterval(function () {
            if (dinoBottom > 250) {
                clearInterval(upTimerId);
                let downTimerId = setInterval(function () {
                    if (dinoBottom <= 0) {
                        clearInterval(downTimerId);
                        isJumping = false;
                    } else {
                        dinoBottom -= 5;
                        dinosaur.style.bottom = dinoBottom + 'px';
                    }
                }, 20);
            } else {
                dinoBottom += 30;
                dinosaur.style.bottom = dinoBottom + 'px';
            }
        }, 20);
    }

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space' && !isJumping) {
            jump();
        }
    });

    let obstacleTimerId = setInterval(function () {
        obstacleLeft -= 2;
        obstacle.style.left = obstacleLeft + 'px';

        if (obstacleLeft <= 0) {
            obstacleLeft = 500;
        }

        if (obstacleLeft > 30 && obstacleLeft < 40 && dinoBottom < 60) {
            alert('Game over');
            clearInterval(obstacleTimerId);
            isGameOver = true;
        }
    }, 20);
});
