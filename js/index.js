// calculation for donation for flood for noakhali

document.getElementById('btn-donate-noakhali').addEventListener('click', function(){
    const newDonateAmountForNoakhali = getInputFieldValue('donate-noakhali-amount');
    
    const previousDonatedAMountForNoakhali = getTextFieldValue('total-donation-noakhali');

    const balanceAMount = getTextFieldValue('current-balance-amount');

    if(newDonateAmountForNoakhali <=0 || isNaN(newDonateAmountForNoakhali)){
        alert('Invalid Donate Amount.');
        return;
    }
    else if (newDonateAmountForNoakhali>balanceAMount){
        alert('You do not have enough amount to donate.');
        return;
    }
    else{
        const totalDonationAmountForNoakhali = newDonateAmountForNoakhali + previousDonatedAMountForNoakhali;
        document.getElementById('total-donation-noakhali').innerText = totalDonationAmountForNoakhali;

        const updatedBalance = balanceAMount - newDonateAmountForNoakhali;
        document.getElementById('current-balance-amount').innerText = updatedBalance;

        const historySection = document.createElement('div');
        historySection.className = 'border p-8 rounded-2xl mb-6';
        historySection.innerHTML=`
        <h2 class="text-black font-bold text-xl py-4">${newDonateAmountForNoakhali} Taka is Donated for flood-2024 at Feni, Bangladesh  </h2>
        <p class='text-xs text-gray-500'>Date: ${new Date()}</p>
        `;
        const historyContainer = document.getElementById('history-section');
        historyContainer.insertBefore(historySection, historyContainer.firstChild);

        my_modal_1.showModal();

        // alert('Donation Successfull.');
    }
});

document.getElementById('btn-history').addEventListener('click', function(){

    const historyButton = document.getElementById('btn-history');
    historyButton.classList.add('bg-lime-300', 'text-black');
    historyButton.classList.remove('text-gray-500', 'outline', 'outline-2');


    const donationButton = document.getElementById('btn-donation');
    donationButton.classList.remove('bg-lime-300');
    donationButton.classList.add('outline', 'outline-2', 'text-gray-500');

    const cardContainer = document.getElementById('card-container');
    cardContainer.classList.add('hidden');

    const historyList = document.getElementById('history-section');
    historyList.classList.remove('hidden');
});


document.getElementById('btn-donation').addEventListener('click', function(){

    const historyButton = document.getElementById('btn-history');
    historyButton.classList.remove('bg-lime-300', 'text-black');
    historyButton.classList.add('text-gray-500', 'outline', 'outline-2');


    const donationButton = document.getElementById('btn-donation');
    donationButton.classList.add('bg-lime-300');
    donationButton.classList.remove('outline', 'outline-2', 'text-gray-500');

    const cardContainer = document.getElementById('card-container');
    cardContainer.classList.remove('hidden');

    const historyList = document.getElementById('history-section');
    historyList.classList.add('hidden');

});


