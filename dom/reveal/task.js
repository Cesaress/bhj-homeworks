let hiddenBlocks = Array.from(document.getElementsByClassName('reveal'));

let revealBlock = function() {
    for (let block of hiddenBlocks) {
        let blockPosition = block.getBoundingClientRect().top;

        if (blockPosition<window.innerHeight) {
            block.classList.add('reveal_active')
        };
    };
};

document.addEventListener('scroll', revealBlock);