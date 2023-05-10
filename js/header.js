const headerBtns = document.querySelectorAll(".header__btn")
    const geoBtn = document.querySelector(".header__geo-btn")
    const menuBtn = document.querySelector(".header__menu-btn")
    const headerBottom = document.querySelector(".header__bottom")
    const headerBottomBody = document.querySelector(".header__bottom-body")
    const headerLink = document.querySelectorAll('.header__bottom-list-link')
    let timelineHeader = gsap.timeline()
    document.addEventListener('click', headerLinkClouse);
    function headerLinkClouse(event){

        if(event.target.closest('.header__bottom-list-link')){
            gsapClouseMenu()
            deleteClassMenu()
            headerBottomOpen()
        };
    }
    headerBtns.forEach(item => {
        item.addEventListener('click', ()=>{
            item.classList.toggle('_active')
            if(item.classList.contains("header__menu-btn")) {
                gsapOpenMenu()
                deleteClassGeo()
                headerBottomOpen()
                gsapClouseAddress()
                headerBottomBody.classList.add("_menu")
            }else if(item.classList.contains("header__geo-btn")) {
                gsapOpenAddress()
                gsapClouseMenu()
                deleteClassMenu()
                headerBottomOpen()
                headerBottomBody.classList.add("_geo")
            }
        })
    })
    function deleteClassGeo(){
        geoBtn.classList.remove("_active");
        headerBottomBody.classList.remove("_geo")
    }
    function deleteClassMenu(){
        menuBtn.classList.remove("_active");
        headerBottomBody.classList.remove("_menu")
    }
    function headerBottomOpen(){
        if(menuBtn.classList.contains("_active") || geoBtn.classList.contains('_active')){
            headerBottom.classList.add("_active")
            headerBottomBody.classList.add("_active")
            document.body.classList.add("_lock")
        } else{
            headerBottom.classList.remove("_active")
            headerBottomBody.classList.remove("_active")
            document.body.classList.remove("_lock")
        }
    }
    function gsapOpenMenu(){
        timelineHeader.to(".header__bottom-list-item", {
            x:0,
            opacity: 1,
            stagger: 0.15,
        })
    }
    function gsapClouseMenu(){
        timelineHeader.to(".header__bottom-list-item", {
            x:40,
            opacity: 0,
            stagger: -0.04,
        })
    }
    function gsapOpenAddress(){
        timelineHeader.to(".address-bottom__string", {
            x:0,
            opacity: 1,
            stagger: 0.1
        })
    }
    function gsapClouseAddress(){
        timelineHeader.to(".address-bottom__string", {
            x:-40,
            opacity: 0,
            stagger: -0.04,
        })
    }