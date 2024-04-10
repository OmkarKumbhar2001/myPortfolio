function calculateSIP(monthlyInvestment, expectedReturn, timePeriod, increasingAmount) {
    const monthlyRate = expectedReturn / 12 / 100;
    let totalAmount = 0;
    let increasingInvestment = monthlyInvestment;
    let invested_amount = 0;
    let annualInvestedAmount = 0;

    console.log('Year | Invested Amount | Wealth Gained | Expected Amount');
    
    for (let i = 1; i <= timePeriod * 12; i++) {
        annualInvestedAmount += increasingInvestment;
        totalAmount += increasingInvestment;
        const interest = totalAmount * monthlyRate;
        totalAmount += interest;
        invested_amount += increasingInvestment;

        if (i % 12 === 0) {
            let wealthGained = totalAmount - invested_amount;
            console.log(`${i / 12} | ${annualInvestedAmount.toFixed(2)} | ${wealthGained.toFixed(2)} | ${totalAmount.toFixed(2)}`);
            increasingInvestment += increasingAmount;
            annualInvestedAmount = 0;  // Reset annual investment for the new year
        }
    }

    return { totalAmount: totalAmount.toFixed(2), invested_amount: invested_amount.toFixed(2) };
}
export default calculateSIP;
// const monthlyInvestment = 4000;
// const expectedReturn = 10;
// const timePeriod = 6;
// const increasingAmount = 0;

// const result = calculateSIP(monthlyInvestment, expectedReturn, timePeriod, increasingAmount);

// console.log(`Total amount after ${timePeriod} years: Rs. ${result.totalAmount}`);
// console.log(`Total invested amount after ${timePeriod} years: Rs. ${result.invested_amount}`);