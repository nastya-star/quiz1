document.addEventListener('DOMContentLoaded', function () {
    const closeModal = document.querySelector('#closeModal')
    const btnOpenModal= document.querySelector('#btnOpenModal');
    const modalBlock = document.querySelector('#modalBlock');
    const questionTitle = document.querySelector('#question');
    const formAnswers = document.querySelector('formAnswers');

    btnOpenModal.addEventListener('click', () => {
        modalBlock.classList.add('d-block')
        playTest();
    })
    closeModal.addEventListener('click', () => {
        modalBlock.classList.remove('d-block')
    })

    const playTest = () =>{
        const renderQuestions = () => {
            questionTitle.textContent = 'Какого цвета бергеры вы хотите?'
        }
        renderQuestions();
    }

})
