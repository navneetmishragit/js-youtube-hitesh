const form=document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');

    if(height==='' || height<0|| isNaN(height)){
        results.innerHTML=`Please give valid Height ${height}`
    }else if(weight===''||weight<0||isNaN(weight)){
        results.innerHTML=`Please give valid weight ${weight}`
    }else{
        const BMI=(weight/((height*height)/10000)).toFixed(2)
        results.innerHTML=`<span>${BMI}</span>`
        if(BMI<18.6){
            results.innerHTML=`<span>${BMI}::Hmm!! you are under weight</span>`
        }
        if(BMI>18.6 && BMI<24.9){
            results.innerHTML=`<span>${BMI}::Super!! Your BMI is normal</span>`
        }else{
            results.innerHTML=`<span>${BMI}::BROOO!! You are overweight you need to workout</span>`
        }
    }
})