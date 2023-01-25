new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data () {
    return {
      value: 1,
      active: false,
      services: [
        {titulo:'S3i - Sistema Inteligente de Intervenção Industrial', img:'./assets/image/homemNovo.png'}, 
        { titulo: 'SEM - Serviços de Engenharia de Manutenção', img: './assets/image/MISSAO1.PNG' }, 
        {titulo:'SIT - Serviços Técnicos de Inspeção e Ensaios', img:'./assets/image/ENGENHEIRA INFORMATIVOS.png'},
        { titulo: 'SFT - Sistema Fixo de Termografia', img: './assets/image/Camada-2-727x1024.png' }
      ],
      window: 0,
      model: null,
    }
  },
})