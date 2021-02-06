const counters = document.querySelectorAll('.counter')

counters.forEach((counter) => {
    counter.innerText = '0'
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText
        //slower bigger number / faster smaller number
        const increment = target / 100

        if ( c < target ) {
          counter.innerText = `${Math.ceil(c + increment)}`
          setTimeout(updateCounter , 1)
        } else {
            counter.innerText = target
        }
    }
    updateCounter()
})