import React, { Component } from 'react';

class Testimonials extends Component {
   componentDidUpdate(){
      test()
   }
   render() {
      
      if (this.props.data) {
         var testimonials = this.props.data.testimonials.map(function (testimonials) {
            
            return <div key={testimonials.user} className="slider slider-hidden">
               <blockquote>
                  <p style={{whiteSpace: 'pre-line'}}>{testimonials.text}</p>
                  <cite>{testimonials.user}</cite>
               </blockquote>
            </div>
         })
      }
      
      return (
         <section id="testimonials">
            <div className="text-container">
               <div className="row testimonial-row">

                  <div className="two columns header-col">
                     <h1><span>LinkedIn Testimonials</span></h1>
                  </div>

                  <div className="ten columns">
                        {testimonials}
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

function test() {
   // Custom
const sliders = document.querySelectorAll(".slider");
console.log(sliders)
let current=0;
sliders[current].classList.remove('slider-hidden')

setInterval(()=>{
    current=(current+1)%sliders.length;
    for (let i=0; i<sliders.length; i++) {
        sliders[i].classList.add('slider-hidden')
        sliders[current].classList.remove('slider-hidden')
    }
}, 15000)

}


export default Testimonials;
