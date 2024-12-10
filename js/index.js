// calculation for donation for flood for noakhali

document.getElementById('btn-donate-noakhali').addEventListener('click', function(){
    const newDonateAmountForNoakhali = getInputFieldValue('donate-noakhali-amount');
    
    const previousDonatedAMountForNoakhali = getTextFieldValue('total-donation-noakhali');

    if(newDonateAmountForNoakhali <=0 || isNaN(newDonateAmountForNoakhali)){
        alert('Invalid Donate Amount.');
        return;
    }
    else{
        const totalDonationAmountForNoakhali = newDonateAmountForNoakhali + previousDonatedAMountForNoakhali;
        document.getElementById('total-donation-noakhali').innerText = totalDonationAmountForNoakhali;
    }
});

