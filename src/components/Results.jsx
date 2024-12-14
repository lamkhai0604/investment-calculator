import React from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment'

const Results = ({ userInput }) => {
    const resultsData = calculateInvestmentResults(userInput);
    const initialInvestmentResults =
        resultsData[0].valueEndOfYear -
        resultsData[0].interest -
        resultsData[0].annualInvestment;
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Amount</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((result, index) => {
                    const totalInterest =
                        result.valueEndOfYear -
                        result.annualInvestment * result.year -
                        initialInvestmentResults;
                    const totalAmountInvested = result.valueEndOfYear - totalInterest;
                    return (
                        <tr key={index}>
                            <td>{result.year}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Results