
// utilities 
function getTextFieldValueById(id){
    return document.getElementById(id);
}
function getTextFieldAmountById(id){
    return parseFloat(document.getElementById(id).innerText);
}
function getInputFieldAmountById(id){
    return parseFloat(document.getElementById(id).value);
}

// noakhali section 
document.getElementById('noakhali-btn').addEventListener('click', function(){
    const noakhaliInput = getInputFieldAmountById('noakhali-input');
    
   if(isNaN(noakhaliInput) || noakhaliInput < 0){
   return  alert('Invalid Donation Amount. Try Again');
   }
   else{
    const noakhaliAmount = getTextFieldAmountById('noakhali-amount');
    const balance = getTextFieldAmountById('balance');
    const noakhaliNewAmount = noakhaliAmount + noakhaliInput;
    document.getElementById('noakhali-amount').innerText = noakhaliNewAmount;
    const newBalance = balance - noakhaliInput;
    document.getElementById('balance').innerText = newBalance;
    my_modal_1.showModal()
   }
 })

 

// blog & home & accordian section 
const blogBtn = getTextFieldValueById('blog-btn');
const faqSection = getTextFieldValueById('faq-section');
const donationHistoryBtn = getTextFieldValueById('donation-history-btn');
const noakhaliSection = getTextFieldValueById('noakhali-section');
const feniSection = getTextFieldValueById('feni-section');
const quotaSection = getTextFieldValueById('quota-section');
const home = getTextFieldValueById('home')
const blog = getTextFieldValueById('blog')


// home blog toggle section
blogBtn.addEventListener('click' , function(){
   faqSection.classList.toggle('hidden');
   
   
   home.classList.toggle('hidden')
   blog.classList.toggle('hidden')
   donationHistoryBtn.classList.toggle('hidden');
   noakhaliSection.classList.toggle('hidden');
   feniSection.classList.toggle('hidden');
   quotaSection.classList.toggle('hidden');
})
