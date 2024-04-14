/**
 * Calculates the future value of SIP investments at given return rates over a period, optionally considering an annual increase in investment.
 * 
 * @param {number} monthlyInvestment - The initial amount invested each month.
 * @param {number} expectedReturn - The annual expected return rate as a percentage.
 * @param {number} timePeriod - The total time period of the investment in years.
 * @param {number} increasingAmount - The amount by which the monthly investment increases each year.
 * @returns {object} Object containing yearly values and totals of investment and returns.
 */
function calculateSIP(monthlyInvestment, expectedReturn, timePeriod, increasingAmount = 0) {
    if (monthlyInvestment < 0 || expectedReturn < 0 || timePeriod < 0) {
        throw new Error("Invalid input: Investment values and time period must be non-negative.");
    }

    const yearlyValues = [];
    const monthlyRate = expectedReturn / 12 / 100;
    let totalAmount = 0;
    let increasingInvestment = monthlyInvestment;
    let invested_amount = 0;
    let annualInvestedAmount = 0;

    for (let i = 1; i <= timePeriod * 12; i++) {
        annualInvestedAmount += increasingInvestment;
        totalAmount += increasingInvestment;
        const interest = totalAmount * monthlyRate;
        totalAmount += interest;
        invested_amount += increasingInvestment;

        if (i % 12 === 0) {
            let wealthGained = totalAmount - invested_amount;
            yearlyValues.push({
                year: i / 12,
                invested_amount: annualInvestedAmount.toFixed(2),
                wealthGained: wealthGained.toFixed(2),
                expectedAmount: totalAmount.toFixed(2)
            });

            increasingInvestment += increasingAmount;
            annualInvestedAmount = 0;
        }
    }

    return { yearlyValues, totalAmount: totalAmount.toFixed(2), invested_amount: invested_amount.toFixed(2) };
}

export default calculateSIP;
