(() => {
    document.addEventListener('DOMContentLoaded', function () {
        let coupleArr = [];
        function generateCoupleArr(a, b) {

            for (let i = a; i < b; i++) {
                coupleArr.push(i);
                coupleArr.push(i);
            }
            console.log(coupleArr);
        }
        generateCoupleArr(1, 9);

        let randomArr = coupleArr.sort(() => Math.random() - 0.5);
        console.log(randomArr);

        const card = document.querySelectorAll('.game__card');

        let firstCard = null;
        let secondCard = null;
        card.forEach(function (elem, index) {
            elem.textContent = randomArr[index];

            elem.addEventListener('click', () => {
                elem.classList.add('game__card--active');

                if (!firstCard) {
                    firstCard = elem;
                    firstCard.classList.add('game__card--active');
                } else if (!secondCard) {
                    secondCard = elem;
                    secondCard.classList.add('game__card--active');
                }
                if (firstCard.textContent != secondCard.textContent) {
                    firstCard.classList.remove('game__card--active');
                    secondCard.classList.remove('game__card--active')
                }
                firstCard = null;
                secondCard = null;
            })
        })
    })
})()