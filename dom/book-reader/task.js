const getOtherEffectClassNames = (currentEffect, effects)=> {
    const result = []
    for (const effect of effects) {
        if(effect.id !== currentEffect.id) {
            result.push(effect.className)
        }
    }
    return result
};

const createButtonGroup = ({
    buttonClassName, contentId, activeClassName, effectClassNames
})=> {
    const buttons = Array.from(document.querySelectorAll(buttonClassName));
    const content = document.getElementById(contentId)
    for (const button of buttons) {
        button.addEventListener('click', (event)=> {
            event.preventDefault()
            const activeButton = buttons.find(index=>index.classList.contains(activeClassName))
            activeButton.classList.remove(activeClassName);
            button.classList.add(activeClassName);
            for (const effect of effectClassNames) {
                const otherEffectClassNames = getOtherEffectClassNames(effect, effectClassNames)
                if (button.classList.contains(effect.id)) {
                    content.classList.remove(...otherEffectClassNames);
                    content.classList.add(effect.className)
                }
            }
        })
    }
};

createButtonGroup({
    buttonClassName: '.font-size',
    contentId: 'book',
    activeClassName: 'font-size_active',
    effectClassNames: [
        {id:'font-size_small', className: 'book_fs-small'},
        {id:'font-size_normal', className: 'book_fs-normal'},
        {id:'font-size_big', className: 'book_fs-big'}
    ]
});

createButtonGroup({
    buttonClassName: '.book__control_color .color',
    contentId: 'book',
    activeClassName: 'color_active',
    effectClassNames: [
        {id:'text_color_black', className: 'book_color-black'},
        {id:'text_color_gray', className: 'book_color-gray'},
        {id:'text_color_whitesmoke', className: 'book_color-whitesmoke'}
    ]
});

createButtonGroup({
    buttonClassName: '.book__control_background .color',
    contentId: 'book',
    activeClassName: 'color_active',
    effectClassNames: [
        {id:'bg_color_black', className: 'book_bg-black'},
        {id:'bg_color_gray', className: 'book_bg-gray'},
        {id:'bg_color_white', className: 'book_bg-white'}
    ]
});