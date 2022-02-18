document.addEventListener('DOMContentLoaded', () => { // Структура страницы загружена и готова к взаимодействию

    const tabs = (tabsSelector, tabsHeadSelector, tabsBodySelector, tabsCaptionSelector, tabsCaptionActiveClass, tabsContentActiveClass) => { // объявляем основную функцию tabs, которая будет принимать CSS классы и селекторы
  
      const tabs = document.querySelector(tabsSelector) // ищем на странице элемент по переданному селектору основного элемента вкладок и записываем в константу
      const head = tabs.querySelector(tabsHeadSelector) // ищем в элементе tabs элемент с кнопками по переданному селектору и записываем в константу
      const body = tabs.querySelector(tabsBodySelector) // ищем в элементе tabs элемент с контентом по переданному селектору и записываем в константу
  
      const getActiveTabName = () => { // функция для получения названия активной вкладки
        return head.querySelector(`.${tabsCaptionActiveClass}`).dataset.tab // возвращаем значение data-tab активной кнопки
      }
  
      const setActiveContent = () => { // функция для установки активного элемента контента
        if (body.querySelector(`.${tabsContentActiveClass}`)) { // если уже есть активный элемент контента
          body.querySelector(`.${tabsContentActiveClass}`).classList.remove(tabsContentActiveClass) // то скрываем его
        }
        body.querySelector(`[data-tab=${getActiveTabName()}]`).classList.add(tabsContentActiveClass) // затем ищем элемент контента, у которого значение data-tab совпадает со значением data-tab активной кнопки и отображаем его
      }
  
      // проверяем при загрузке страницы, есть ли активная вкладка
      if (!head.querySelector(`.${tabsCaptionActiveClass}`)) { // если активной вкладки нет
        head.querySelector(tabsCaptionSelector).classList.add(tabsCaptionActiveClass) // то делаем активной по-умолчанию первую вкладку
      }
  
      setActiveContent(getActiveTabName()) // устанавливаем активный элемент контента в соответствии с активной кнопкой при загрузке страницы
  
      head.addEventListener('click', e => { // при клике на элемент с кнопками
        const caption = e.target.closest(tabsCaptionSelector) // узнаем, был ли клик на кнопке
        if (!caption) return // если клик был не на кнопке, то прерываем выполнение функции
        if (caption.classList.contains(tabsCaptionActiveClass)) return // если клик был на активной кнопке, то тоже прерываем выполнение функции и ничего не делаем
  
        if (head.querySelector(`.${tabsCaptionActiveClass}`)) { // если уже есть активная кнопка
          head.querySelector(`.${tabsCaptionActiveClass}`).classList.remove(tabsCaptionActiveClass) // то удаляем ей активный класс
        }
  
        caption.classList.add(tabsCaptionActiveClass) // затем добавляем активный класс кнопке, на которой был клик
  
        setActiveContent(getActiveTabName()) // устанавливаем активный элемент контента в соответствии с активной кнопкой
      })
    }
  
    tabs('.section__tabs', '.tabs__head', '.tabs__body', '.tabs__caption', 'tabs__caption_active', 'tabs__content_active') // вызываем основную функцию tabs для синих вкладок .section__tabs
  
    tabs('.about__tabs', '.tabs__head', '.tabs__body', '.tabs__caption', 'tabs__caption_active', 'tabs__content_active') // вызываем основную функцию tabs для зелёных вкладок .about__tabs
  
  })
  





