const app = Vue.createApp({
      data() {
        return {
          showTextareas: true,
          showReflections: false,
          fullname: '',
          c1r1: '', 
          c1r2: '', 
          c2r1: '', 
          c2r2: '', 
          c3r1: '', 
          c3r2: '', 
          c4r1: '',
          c4r2: ''
        }
    }, 
  methods: {
    savePdf() {
      this.showSavePDFButton = false;
      this.showTextareas = false;
      this.showReflections = true;
     	let formElement = document.getElementById('pdfForm');
	   	html2pdf().set({pagebreak: { mode: ['avoid-all']}}).from(formElement).save('selfAssessmentRubric.pdf')
	    }, 
    
    editTextareas() {
      this.showTextareas = true;
      this.showReflections = false;
    }
  }
  
  })
  
 app.mount('#app')