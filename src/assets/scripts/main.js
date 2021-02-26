import 'lazysizes'
import UIkit from 'uikit'
import { App, Quiz, Form } from '../../modules/scripts/_core'


document.addEventListener(`DOMContentLoaded`, function () {
    const app = new App()
    app.init()



    const quiz = new Quiz({
        selector: `#quiz`
    })
    quiz.create()
    
    

    UIkit.slideshow(`.s5__slideshow`, {
        autoplay: false,
        animation: 'push',
        draggable: false,
        ratio: false
    })
    document.querySelectorAll(`.s5__slideshow-navitem`).forEach( (elem, idx, parent) => {
        elem.addEventListener(`click`, (event) => {
            event.preventDefault()
            document.querySelector(`.s5__slideshow-navitem.active`).classList.remove(`active`)
            event.currentTarget.classList.add(`active`)
            document.querySelector(`.s5 h2.d-md-none`).textContent = event.currentTarget.textContent
            document.querySelectorAll(`.s5__slideshow-navitem`).forEach( (elem, idx) => {
                if (elem.classList.contains(`active`)) {
                    UIkit.slideshow(`.s5__slideshow`).show(idx)
                }
            })

        })
    })
    if (window.innerWidth < app.md) {

    } else if (window.innerWidth >= app.md && window.innerWidth < app.lg) {

    } else if (window.innerWidth >= app.lg) {

    }
    if (window.innerWidth < app.md) {
        UIkit.slider(`.s5__slider-nav`, {
            autoplay: false,
            draggable: false
        })
        
        document.querySelectorAll(`.s5__slider-prev`).forEach( (elem, idx) => {
            elem.addEventListener(`click`, (event) => {
                event.preventDefault()
                const target = event.currentTarget
                const set = target.closest(`.s5__slider-nav`).querySelectorAll(`.s5__slider-listitem`)
                const index = app.indexOfElements(
                    target.closest(`.s5__slider-nav`).querySelector(`.s5__slider-listitem.active`), 
                    set
                )
                UIkit.slider(target.closest(`.s5__slider-nav`)).show(index - 1)
                UIkit.slider(target.closest(`.s5__slideshow-item`).querySelector(`.s5__slider`)).show(index - 1)
                if (index > 0) {
                    app.changeActivitySet(set, index - 1)
                } else {
                    app.changeActivitySet(set, set.length - 1)
                }
            })
        })

        document.querySelectorAll(`.s5__slider-next`).forEach( (elem, idx) => {
            elem.addEventListener(`click`, (event) => {
                event.preventDefault()
                const target = event.currentTarget
                const set = target.closest(`.s5__slider-nav`).querySelectorAll(`.s5__slider-listitem`)
                const index = app.indexOfElements(
                    target.closest(`.s5__slider-nav`).querySelector(`.s5__slider-listitem.active`), 
                    set
                )
                UIkit.slider(target.closest(`.s5__slider-nav`)).show(index + 1)
                UIkit.slider(target.closest(`.s5__slideshow-item`).querySelector(`.s5__slider`)).show(index + 1)
                if (index < set.length - 1) {
                    app.changeActivitySet(set, index + 1)
                } else {
                    app.changeActivitySet(set, 0)
                }
            })
        })

        //S7
        UIkit.slideshow(`.s7__slideshow`, {
            autoplay: false,
            draggable: true,
            ratio: false
        })

        UIkit.slider(`.s11__slider`, {
            autoplay: false
        })
    }
    else {
        document.querySelectorAll(`.s5__slider-listitem`).forEach( (elem, idx) => {
            elem.addEventListener(`click`, event => {
                event.preventDefault()
                const target = event.currentTarget
                const set = target.closest(`.s5__slider-nav`).querySelectorAll(`.s5__slider-listitem`)
                const index = app.indexOfElements(target, set)
                UIkit.slider(target.closest(`.s5__slideshow-item`).querySelector(`.s5__slider`)).show(index)
                app.changeActivitySet(set, index)
            })
        })

        //S7
        UIkit.slideshow(`.s7__slideshow`, {
            autoplay: false,
            animation: 'push',
            draggable: false,
            ratio: false
        })
        document.querySelectorAll(`.s7__slideshow-navitem`).forEach( (elem, idx, parent) => {
            
            elem.addEventListener(`click`, (event) => {
                event.preventDefault()
                document.querySelector(`.s7__slideshow-navitem.active`).classList.remove(`active`)
                event.currentTarget.classList.add(`active`)
                document.querySelectorAll(`.s7__slideshow-navitem`).forEach( (elem, idx) => {
                    if (elem.classList.contains(`active`)) {
                        UIkit.slideshow(`.s7__slideshow`).show(idx)
                    }
                })
    
            })
        })
    }
    if (window.innerWidth < app.lg) {
        
    } else {
        
    }


    UIkit.scrollspy(`.s13__map`)
    document.querySelector(`.s13__map`).addEventListener(`inview`, (event) => {
        document.querySelector(`.s13__map-script`).insertAdjacentHTML(`beforeend`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1542.5067930807736!2d32.06801302015278!3d49.44337410905408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14b7c811c873d%3A0x6052c6a008731945!2z0YPQuy4g0KHQvNC10LvRj9C90YHQutCw0Y8sIDE1LCDQp9C10YDQutCw0YHRgdGLLCDQp9C10YDQutCw0YHRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQutGA0LDQuNC90LAsIDE4MDAx!5e0!3m2!1sru!2sru!4v1612765520263!5m2!1sru!2sru" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`)
    })


    UIkit.scrollspy(`#v-about`)
    document.querySelector(`#v-about`).addEventListener(`inview`, (event) => {
        document.querySelector(`#v-about .popup__body`).insertAdjacentHTML(`beforeend`, `<iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/lpGr5OuS4mg" frameborder="0" allowfullscreen="true" data-uk-video data-uk-responsive"></iframe>`)
    })
    

})
