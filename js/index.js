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
        
        alert('Donation Successfull.');
    }
});





