var $myVideo = document.querySelectorAll(".empresa"); 
var $git = document.querySelectorAll('.img_empresa')
let $ligar= document.querySelectorAll('.ligar_desligar')
let $close = document.querySelector('.close')
let videos = document.querySelector('.partnership_comments').getBoundingClientRect()
const $inputs = document.querySelectorAll('.js_input')
const $input_form = document.querySelectorAll('.js-form_input')
var onlyletras =new RegExp(/^[a-záàâãéèêíïóôõöúçñ ]+$/i);

const onlyNumbers = new RegExp('^[0-9]+$')

//Corrossel para os Videos

new Glider(document.querySelector('.cards_videos'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '.videos_dots',
    scrollLock: true,
    arrows: {
        prev: '.video-prev',
        next: '.video-next'
        },
        responsive: [
        {
            
            breakpoint: 775,
            settings: {
            slidesToShow: 1.8,
                slidesToScroll: 1,
                draggable: false,
                scrollLock:false,
            
            }
        }
    ]
});



//Corrossel para os Serviços
new Glider(document.querySelector('.glider_services'), {
    slidesToShow: 1,
    dots: '.dots_services',
    draggable: true,
    scrollLock: true,
    arrows: {
      prev: '.prev_services',
      next: '.next_services'
    }
  });


//Corrossel para os Parceiros
new Glider(document.querySelector('.carroussel_parceria'), {
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: true,
    scrollPropagate: true,
    dots: '.carroussel_dots',
    arrows: {
        prev: '.carroussel-prev',
        next: '.carroussel-next'
    },
    responsive: [
        {
            
            breakpoint: 775,
            settings: {
            
            slidesToShow: 3,
                slidesToScroll: 1,
                draggable: true,
                scrollPropagate: true,
            
            }
        },{
            
            breakpoint: 900,
            settings: {
            slidesToShow: 4,
                slidesToScroll: 2,
                draggable: true,
                scrollPropagate: true,
            
            }
        }
    ]
});


//Esvaziando a MODAL
$close.addEventListener('click', () => {
    $inputs.forEach(input => {
        input.value=''
    });
})





//Habilitando o botão do fromulario

function habilitarPeloNomeform(element){
    element.style.border='1px solid black'
    document.querySelectorAll(".buttom_desabled").forEach(val => {
        val.classList.remove("buttom_true")
        val.setAttribute("disabled", "true");
       
    });

    let newEl=$input_form[2].value.replace(" ", '')

    if(onlyletras.test(element.value)==true&& (newEl.length>0 && onlyNumbers.test(newEl)==true )){
        document.querySelectorAll(".buttom_desabled").forEach(val => {
            val.classList.add("buttom_true")
            val.removeAttribute("disabled");
        });
    } else if (onlyletras.test(element.value)==false){
        element.style.border='1px solid red'
    }
}

function habilitarPeloNumeroform(el){
    el.style.border='1px solid black'
    document.querySelectorAll(".buttom_desabled").forEach(val => {
        val.classList.remove("buttom_true")
        val.setAttribute("disabled", "true");
       
    });

    let newEl=el.value.replace(" ", '')
    console.log(newEl)

    if(onlyNumbers.test(newEl)==true && ($input_form[0].value.length>0 && onlyletras.test($input_form[0].value)==true )){
        document.querySelectorAll(".buttom_desabled").forEach(val => {
            val.classList.add("buttom_true")
            val.removeAttribute("disabled");
        });
    }  else if (onlyNumbers.test(newEl.value)==false){
        el.style.border='1px solid red'
    }
}



//Habilitando o botão do fromulario Modal
function habilitarPeloNome(element){
    element.style.border='1px solid black'
    document.querySelectorAll(".buttom_desabled").forEach(val => {
        val.classList.remove("buttom_true")
        val.setAttribute("disabled", "true");
       
    });

    let newEl=$inputs[2].value.replace(" ", '')

    if(onlyletras.test(element.value)==true&& (newEl.length>0 && onlyNumbers.test(newEl)==true )){
        document.querySelectorAll(".buttom_desabled").forEach(val => {
            val.classList.add("buttom_true")
            val.removeAttribute("disabled");
        });
    } else if (onlyletras.test(element.value)==false){
        element.style.border='1px solid red'
    }
}

function habilitarPeloNumero(el){
    el.style.border='1px solid black'
    document.querySelectorAll(".buttom_desabled").forEach(val => {
        val.classList.remove("buttom_true")
        val.setAttribute("disabled", "true");
       
    });

    let newEl=el.value.replace(" ", '')
    console.log(newEl)

    if(onlyNumbers.test(newEl)==true && ($inputs[0].value.length>0 && onlyletras.test($inputs[0].value)==true )){
        document.querySelectorAll(".buttom_desabled").forEach(val => {
            val.classList.add("buttom_true")
            val.removeAttribute("disabled");
        });
    }  else if (onlyNumbers.test(newEl.value)==false){
        el.style.border='1px solid red'
    }
}














// Scroll para servços
function scrollServicos() {
    let coord = document.querySelector('.js_title_seevices').getBoundingClientRect()
    window.scrollTo({
        top: coord.top,
        behavior: 'smooth',
    });
}



//Lidando com os Videos

function displayNone() {
    $ligar.forEach(element =>{
        element.style.display='block'
    })
    $git.forEach(element => {
        element.style.display = 'block';
    });
    $myVideo.forEach(element => {
        element.pause();
    });
}
 

function playPause(e) { 
    displayNone()
    $ligar[e].style.display='none'
    $git[e].style.display='none'
    $myVideo[e].play()
} 




// Padrão para os telefones
function Formatar(mascara, documento){
    let i = documento.value.length
    let saida = mascara.substring(0,1)
    let texto = mascara.substring(i)
    if(texto.substring(0,1) != saida){
        documento.value += texto.substring(0,1)
    }
}





class MobileNavBar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active"
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks()
    }
  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick)
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}


const mobileNavBar = new MobileNavBar(".mobile-menu", ".nav-list",".nav-list li",);
mobileNavBar.init();



//ATIVANDO O TOOLTIP
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


//Ativação dos idiomas
window.gtranslateSettings = {"default_language":"pt","languages":["pt","fr","en","es"],"wrapper_selector":".gtranslate_wrapper","flag_size":24,"flag_style":"3d","alt_flags":{"en":"usa","pt":"brazil"}}



document.querySelector('.banner_mci').addEventListener('click', () => {
    window.location.href='https://www.youtube.com/playlist?list=PLA8tyKb1AjYCrcGFOOtj0GiE_o5Q4Rpdk'
})