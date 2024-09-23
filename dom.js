
function getTextFieldValueById(id){
    return document.getElementById(id)
}

const blogBtn = getTextFieldValueById('blog-btn');
const faqSection = getTextFieldValueById('faq-section');
const donationHistoryBtn = getTextFieldValueById('donation-history-btn');
const noakhaliSection = getTextFieldValueById('noakhali-section')
const feniSection = getTextFieldValueById('feni-section')
const quotaSection = getTextFieldValueById('quota-section')

// home blog toggle section
blogBtn.addEventListener('click' , function(){
   faqSection.classList.toggle('hidden');
   blogBtn.innerText = 'Home';
   

   
   donationHistoryBtn.classList.toggle('hidden');
   noakhaliSection.classList.toggle('hidden');
   feniSection.classList.toggle('hidden');
   quotaSection.classList.toggle('hidden');
})
