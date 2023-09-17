const collapse = () => {
    const triggerBtns = document.querySelectorAll('.collapse__block-trigger')

    triggerBtns.forEach(item => {
        item.addEventListener('click', () => {
            item.parentNode.parentNode.classList.toggle('active')
        })
    })
}

collapse()

const popup = () => {
    const games = document.querySelector(".games__block");
    const popup = document.querySelector(".popup");
    const wrap = document.querySelector(".popup-wrap");
    const cross = document.querySelector(".popup__cross");
    const iframe = document.querySelector(".iframe");

    games.addEventListener("click", (event) => {
        event.preventDefault();
        const game = event.target.closest("a");
        iframe.src = game.href;
        wrap.classList.add("active");

        cross.addEventListener("click", () => {
            popup.classList.add("close");
            setTimeout(() => {
            wrap.classList.remove("active");
            popup.classList.remove("active");
            popup.classList.remove("open");
            iframe.src = "";
            }, 200);
        });
        wrap.addEventListener("click", () => {
            popup.classList.add("close");
            setTimeout(() => {
            wrap.classList.remove("active");
            popup.classList.remove("active");
            popup.classList.remove("open");
            iframe.src = "";
            }, 200);
        });
        popup.classList.add("active");
        popup.classList.remove("close");
        popup.classList.add("open");
    });
}

popup()