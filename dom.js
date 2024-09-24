
// utilities 
function getTextFieldValueById(id) {
    return document.getElementById(id);
}
function getTextFieldAmountById(id) {
    return parseFloat(document.getElementById(id).innerText);
}
function getInputFieldAmountById(id) {
    return parseFloat(document.getElementById(id).value);
}

const blogBtn = getTextFieldValueById('blog-btn');
const faqSection = getTextFieldValueById('faq-section');
const donationHistoryBtn = getTextFieldValueById('donation-history-btn');
const noakhaliSection = getTextFieldValueById('noakhali-section');
const feniSection = getTextFieldValueById('feni-section');
const quotaSection = getTextFieldValueById('quota-section');
const home = getTextFieldValueById('home');
const blog = getTextFieldValueById('blog');

const historySection = getTextFieldValueById('history-section');
const donationSection = getTextFieldValueById('donation-section');

const noakhaliTitle = getTextFieldValueById('noakhali-title').innerText
const feniTitle = getTextFieldValueById('feni-title').innerText
const quotaTitle = getTextFieldValueById('quota-title').innerText



// noakhali section 
document.getElementById('noakhali-btn').addEventListener('click', function () {
    const noakhaliInput = getInputFieldAmountById('noakhali-input');

    if (isNaN(noakhaliInput) || noakhaliInput < 0) {
        return alert('Invalid Donation Amount. Try Again');
    }
    else {
        const noakhaliAmount = getTextFieldAmountById('noakhali-amount');
        const balance = getTextFieldAmountById('balance');

        const noakhaliNewAmount = noakhaliAmount + noakhaliInput;
        const newBalance = balance - noakhaliInput;

        document.getElementById('noakhali-amount').innerText = noakhaliNewAmount;
        document.getElementById('balance').innerText = newBalance;
        
        let div = document.createElement('div')
        div.innerHTML = `
        <div class="p-8 border border-slate-300 rounded-2xl  ">
           <h3 class="text-xl font-bold text-primary"> ${noakhaliInput} Taka is ${noakhaliTitle} </h3>
           <p class="font-light text-secondary"> Date :  ${new Date().toLocaleDateString()} GMT +0600 (Bangladesh Standard Time)</p>
        </div>
     `
        historySection.appendChild(div)
        my_modal_1.showModal()
    }
})

//feni Section
document.getElementById('feni-btn').addEventListener('click', function () {
    const feniInput = getInputFieldAmountById('feni-input');
    if (feniInput < 0 || isNaN(feniInput)) {
        return alert('Invalid Donation Amount. Try Again')
    }
    else {
        const feniAmount = getTextFieldAmountById('feni-amount');
        const balance = getTextFieldAmountById('balance');

        const feniNewAmount = feniAmount + feniInput;
        const newBalance = balance - feniInput;

        document.getElementById('feni-amount').innerText = feniNewAmount;
        document.getElementById('balance').innerText = newBalance;

        let div = document.createElement('div');
        div.innerHTML = `
         <div class="p-8 border border-slate-300 rounded-2xl  ">
           <h3 class="text-xl font-bold text-primary"> ${feniInput} Taka is ${feniTitle} </h3>
           <p class="font-light text-secondary">Date :  ${new Date().toLocaleDateString()} GMT +0600 (Bangladesh Standard Time)</p>
        </div>
        `

    historySection.appendChild(div)
        my_modal_1.showModal()
    }
});

// quota section 
document.getElementById('quota-btn').addEventListener('click', function () {
    const quotaInput = getInputFieldAmountById('quota-input');
    if (quotaInput < 0 || isNaN(quotaInput)) {
        return alert('Invalid Donation Amount. Try Again')
    }
    else {
        const quotaAmount = getTextFieldAmountById('quota-amount');
        const balance = getTextFieldAmountById('balance');

        const quotaNewAmount = quotaAmount + quotaInput;
        const newBalance = balance - quotaInput;

        document.getElementById('quota-amount').innerText = quotaNewAmount;
        document.getElementById('balance').innerText = newBalance;

        let div = document.createElement('div');
        div.innerHTML = `
         <div class="p-8 border border-slate-300 rounded-2xl  ">
           <h3 class="text-xl font-bold text-primary"> ${quotaInput} Taka is ${quotaTitle} </h3>
           <p class="font-light text-secondary">Date :  ${new Date().toLocaleDateString()} GMT +0600 (Bangladesh Standard Time)</p>
        </div>
        `

    historySection.appendChild(div)

        my_modal_1.showModal()
    }
})

//Donation histry button working section 
function showSectionById1(id) {
    noakhaliSection.classList.add('hidden');
    feniSection.classList.add('hidden');
    quotaSection.classList.add('hidden');


    document.getElementById(id).classList.remove('hidden')
}
function showSectionById2(id) {
    noakhaliSection.classList.remove('hidden');
    feniSection.classList.remove('hidden');
    quotaSection.classList.remove('hidden');


    document.getElementById(id).classList.add('hidden')
}

function donationBtn() {
    showSectionById2('history-section');
    document.getElementById('history-btn').classList.remove('bg-btnColor');
    document.getElementById('donation-btn').classList.add('bg-btnColor')
}

function historyBtn() {
    showSectionById1('history-section');
    document.getElementById('history-btn').classList.add('bg-btnColor');
    document.getElementById('donation-btn').classList.remove('bg-btnColor')
   
}





// home blog toggle section
blogBtn.addEventListener('click', function () {
    faqSection.classList.toggle('hidden');


    home.classList.toggle('hidden')
    blog.classList.toggle('hidden')
    donationHistoryBtn.classList.toggle('hidden');
    noakhaliSection.classList.toggle('hidden');
    feniSection.classList.toggle('hidden');
    quotaSection.classList.toggle('hidden');
    historySection.classList.add('hidden')

})
