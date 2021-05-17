const app = new Vue({

  el: '#app',
  data: {
     correos : [],
  },
  mounted(){

    for(let i = 0; i < 10; i++){
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(resp =>{
        this.correos.push(resp.data.response)
      })
      .catch(err =>{
          console.log(err)
      });     
    }
      

  },
  methods:{
    
    
  }

})
