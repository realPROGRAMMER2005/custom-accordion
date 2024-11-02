document.addEventListener('DOMContentLoaded', function () {
	const accordionButtons = document.querySelectorAll('.accordion__button')

	accordionButtons.forEach(button => {
		button.addEventListener('click', toggleAccordionDetail)
	})

	function toggleAccordionDetail() {
		const parentAccordion = this.closest('.accordion__item')
		const accordionDetail = parentAccordion.querySelector('.accordion__detail')

		// Получаем текущую высоту компонента для анимации
		const isOpen = accordionDetail.classList.contains(
			'accordion__detail--active'
		)
		const contentHeight = accordionDetail.scrollHeight // Высота контента

		if (isOpen) {
			accordionDetail.style.maxHeight = '0' // Скрываем
      this.classList.remove('accordion__button--active') // Убираем активный класс
		} else {
			accordionDetail.style.maxHeight = `${contentHeight}px` // Отображаем
      this.classList.add('accordion__button--active') // Добавляем активный класс
		}

		// Переключаем класс активности
		accordionDetail.classList.toggle('accordion__detail--active')
	}
})
