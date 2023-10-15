const accordion = document.getElementById('accordion')

accordion.addEventListener('click', e => {
    const accordionHeaderId = e.target.dataset.accordionHeader //essa linha de código ira pegar o atributo do data-accordion-header, que podem ser os valores 1,2 ou 3
    const clickedAccordionHeader = 
        document.querySelector(`[data-accordion-header="${accordionHeaderId}"]`) //Essa linha de código irá pegar o button clicado
    const accordionItemToBeOpened = 
        document.querySelector(`[data-accordion-body="${accordionHeaderId}"]`) //Essa linha de código irá pegar a div class="accordion-body" do button correspondente

    const accordionHeaderToBeClosed = Array
        .from(document.querySelectorAll('[data-js="accordion-header"]')).
        filter(accordionHeader => accordionHeader !== clickedAccordionHeader).
        find(accordionHeader => accordionHeader.classList.contains('active'))

    if(!e.target.dataset.accordionHeader){
        return
    }

    if(accordionHeaderToBeClosed){
        const accordionHeaderId = accordionHeaderToBeClosed.dataset.accordionHeader
        const accordionBodyToBeClosed = 
        document.querySelector(`[data-accordion-body="${accordionHeaderId}"]`)

        accordionHeaderToBeClosed.classList.remove('active')
        accordionBodyToBeClosed.classList.remove('active')
    }

    clickedAccordionHeader.classList.toggle('active')
    accordionItemToBeOpened.classList.toggle('active')
})
