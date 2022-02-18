function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector)
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimerID);
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector)
    modal.classList.remove("show");
    modal.classList.add("hide");
    document.body.style.overflow = "";
}

function modal(triggerSelector, modalSelector){
    // Modal

    const modal = document.querySelector(modalSelector),
    modalOpen = document.querySelectorAll(triggerSelector);
    modalClose = document.querySelector("[data-close]");

    modalOpen.forEach(btn => {
    btn.addEventListener('click', openModal);
    });

    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getattribute('data-close') === '') {
    closeModal();
    }
    });

    document.addEventListener('keydown', (e) => {
    if(e.code === 'Escape' && modal.classList.contains('show')) {
    closeModal();
    }
    });

    function showModalByScroll() {
    if(window.pageXOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
    openModal();
    window.removeEventListener('scroll', showModalByScroll)
    }
    };

    window.addEventListener('scroll', showModalByScroll)
}

export default modal;
export {closeModal};
export {openModal};
