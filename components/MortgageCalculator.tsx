'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ScheduleButton from '@/components/ScheduleButton';
import styles from '../styles/MortgageCalculator.module.css';

interface MortgageCalculatorProps {
  defaultPrice?: number;
  defaultDownPayment?: number;
  defaultInterestRate?: number;
  defaultLoanTerm?: number;
}

const MortgageCalculator: React.FC<MortgageCalculatorProps> = ({
  defaultPrice = 548175,
  defaultDownPayment = 109635,
  defaultInterestRate = 6.5,
  defaultLoanTerm = 30
}) => {
  const [price, setPrice] = useState(defaultPrice);
  const [downPayment, setDownPayment] = useState(defaultDownPayment);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(defaultInterestRate);
  const [loanTerm, setLoanTerm] = useState(defaultLoanTerm);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [showAmortization, setShowAmortization] = useState(false);
  const [taxRate, setTaxRate] = useState(0.77); // Clark County property tax rate per $100
  const [insuranceRate, setInsuranceRate] = useState(0.35); // Average insurance rate per $100

  useEffect(() => {
    // Calculate mortgage when relevant values change
    const calculateMortgage = () => {
      const principal = price - downPayment;
      const monthlyInterest = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;

      // Calculate principal and interest payment
      const x = Math.pow(1 + monthlyInterest, numberOfPayments);
      const piPayment = principal * (monthlyInterest * x) / (x - 1);

      // Calculate property tax payment
      const annualPropertyTax = (price * taxRate) / 100;
      const monthlyPropertyTax = annualPropertyTax / 12;

      // Calculate insurance payment
      const annualInsurance = (price * insuranceRate) / 100;
      const monthlyInsurance = annualInsurance / 12;

      // Calculate HOA fees (estimated for Sun City Summerlin)
      const monthlyHOA = 275; // Average for Sun City Summerlin

      // Total monthly payment
      const total = piPayment + monthlyPropertyTax + monthlyInsurance + monthlyHOA;

      setMonthlyPayment(total);
    };
    
    calculateMortgage();
  }, [price, downPayment, interestRate, loanTerm, taxRate, insuranceRate]);

  useEffect(() => {
    // Update downPaymentPercent when downPayment changes
    const percent = (downPayment / price) * 100;
    setDownPaymentPercent(parseFloat(percent.toFixed(1)));
  }, [downPayment, price]);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseFloat(e.target.value);
    setPrice(newPrice);
    // Keep the same percentage
    const newDownPayment = (newPrice * downPaymentPercent) / 100;
    setDownPayment(parseFloat(newDownPayment.toFixed(2)));
  };

  const handleDownPaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDownPayment = parseFloat(e.target.value);
    setDownPayment(newDownPayment);
  };

  const handleDownPaymentPercentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPercent = parseFloat(e.target.value);
    setDownPaymentPercent(newPercent);
    const newDownPayment = (price * newPercent) / 100;
    setDownPayment(parseFloat(newDownPayment.toFixed(2)));
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const generateAmortizationSchedule = () => {
    const principal = price - downPayment;
    const monthlyInterest = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    let balance = principal;
    const piPayment = principal * (monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments)) / (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

    const schedule = [];
    let totalInterest = 0;

    for (let i = 1; i <= Math.min(numberOfPayments, 60); i++) { // Display first 5 years
      const interest = balance * monthlyInterest;
      const principalPayment = piPayment - interest;

      totalInterest += interest;
      balance -= principalPayment;

      if (i % 12 === 0) { // Show yearly entries
        schedule.push({
          year: i / 12,
          principalPayment: principalPayment,
          interest: interest,
          totalInterest: totalInterest,
          balance: balance,
        });
      }
    }

    return schedule;
  };

  const paymentBreakdown = {
    principal: price - downPayment,
    monthlyPrincipalAndInterest: ((price - downPayment) * (interestRate / 100 / 12) * Math.pow(1 + interestRate / 100 / 12, loanTerm * 12)) / (Math.pow(1 + interestRate / 100 / 12, loanTerm * 12) - 1),
    monthlyPropertyTax: (price * taxRate) / 100 / 12,
    monthlyInsurance: (price * insuranceRate) / 100 / 12,
    monthlyHOA: 275 // Average for Sun City Summerlin
  };

  return (
    <div className={styles.calculator}>
      <h2 className={styles.calculatorTitle}>Sun City Summerlin Mortgage Calculator</h2>
      <p className={styles.calculatorDescription}>
        Estimate your monthly payments for a Sun City Summerlin property, including HOA fees
      </p>

      <div className={styles.calculatorInputs}>
        <div className={styles.inputGroup}>
          <label htmlFor="price">Home Price</label>
          <div className={styles.inputWrapper}>
            <span className={styles.currencySymbol}>$</span>
            <input
              type="number"
              id="price"
              value={price}
              onChange={handlePriceChange}
              min="100000"
              max="2000000"
              step="1000"
            />
          </div>
          <input
            type="range"
            value={price}
            onChange={handlePriceChange}
            min="300000"
            max="1000000"
            step="5000"
            className={styles.rangeSlider}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="downPayment">Down Payment</label>
          <div className={styles.dualInput}>
            <div className={styles.inputWrapper}>
              <span className={styles.currencySymbol}>$</span>
              <input
                type="number"
                id="downPayment"
                value={downPayment}
                onChange={handleDownPaymentChange}
                min="0"
                max={price}
                step="1000"
              />
            </div>
            <div className={styles.inputWrapper}>
              <input
                type="number"
                value={downPaymentPercent}
                onChange={handleDownPaymentPercentChange}
                min="0"
                max="100"
                step="0.5"
                className={styles.percentInput}
              />
              <span className={styles.percentSymbol}>%</span>
            </div>
          </div>
          <input
            type="range"
            value={downPaymentPercent}
            onChange={handleDownPaymentPercentChange}
            min="0"
            max="40"
            step="1"
            className={styles.rangeSlider}
          />
        </div>

        <div className={styles.inputRow}>
          <div className={styles.inputGroup}>
            <label htmlFor="interestRate">Interest Rate (%)</label>
            <div className={styles.inputWrapper}>
              <input
                type="number"
                id="interestRate"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                min="1"
                max="15"
                step="0.125"
              />
              <span className={styles.percentSymbol}>%</span>
            </div>
            <input
              type="range"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value))}
              min="2"
              max="10"
              step="0.125"
              className={styles.rangeSlider}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="loanTerm">Loan Term (years)</label>
            <select
              id="loanTerm"
              value={loanTerm}
              onChange={(e) => setLoanTerm(parseInt(e.target.value))}
              className={styles.selectInput}
            >
              <option value="15">15 years</option>
              <option value="20">20 years</option>
              <option value="30">30 years</option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.resultSection}>
        <div className={styles.monthlyPayment}>
          <h3>Estimated Monthly Payment</h3>
          <p className={styles.paymentAmount}>{formatCurrency(monthlyPayment)}</p>
        </div>

        <div className={styles.paymentBreakdown}>
          <div className={styles.breakdownItem}>
            <span>Principal & Interest:</span>
            <span>{formatCurrency(paymentBreakdown.monthlyPrincipalAndInterest)}</span>
          </div>
          <div className={styles.breakdownItem}>
            <span>Property Tax:</span>
            <span>{formatCurrency(paymentBreakdown.monthlyPropertyTax)}</span>
          </div>
          <div className={styles.breakdownItem}>
            <span>Home Insurance:</span>
            <span>{formatCurrency(paymentBreakdown.monthlyInsurance)}</span>
          </div>
          <div className={styles.breakdownItem}>
            <span>HOA Fees:</span>
            <span>{formatCurrency(paymentBreakdown.monthlyHOA)}</span>
          </div>
          <div className={`${styles.breakdownItem} ${styles.breakdownTotal}`}>
            <span>Total:</span>
            <span>{formatCurrency(monthlyPayment)}</span>
          </div>
        </div>

        <div className={styles.loanSummary}>
          <div className={styles.summaryItem}>
            <span>Loan Amount:</span>
            <span>{formatCurrency(paymentBreakdown.principal)}</span>
          </div>
          <div className={styles.summaryItem}>
            <span>Total of {loanTerm * 12} Payments:</span>
            <span>{formatCurrency(monthlyPayment * loanTerm * 12)}</span>
          </div>
          <div className={styles.summaryItem}>
            <span>Total Interest Paid:</span>
            <span>{formatCurrency((monthlyPayment * loanTerm * 12) - paymentBreakdown.principal - (paymentBreakdown.monthlyPropertyTax + paymentBreakdown.monthlyInsurance + paymentBreakdown.monthlyHOA) * loanTerm * 12)}</span>
          </div>
        </div>

        <button 
          className={styles.amortizationToggle}
          onClick={() => setShowAmortization(!showAmortization)}
        >
          {showAmortization ? 'Hide Amortization Schedule' : 'Show Amortization Schedule'}
        </button>

        {showAmortization && (
          <div className={styles.amortizationSchedule}>
            <table className={styles.scheduleTable}>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Principal Payment</th>
                  <th>Interest Payment</th>
                  <th>Total Interest Paid</th>
                  <th>Remaining Balance</th>
                </tr>
              </thead>
              <tbody>
                {generateAmortizationSchedule().map((row) => (
                  <tr key={row.year}>
                    <td>{row.year}</td>
                    <td>{formatCurrency(row.principalPayment)}</td>
                    <td>{formatCurrency(row.interest)}</td>
                    <td>{formatCurrency(row.totalInterest)}</td>
                    <td>{formatCurrency(row.balance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className={styles.scheduleNote}>
              * This is an estimate. Contact Dr. Jan Duffy for a personalized assessment.
            </p>
          </div>
        )}
      </div>

      <div className={styles.calculatorFooter}>
        <p>
          Get pre-approved for a mortgage and explore Sun City Summerlin properties with Dr. Jan Duffy.
        </p>
        <div className={styles.footerCtaRow}>
          <ScheduleButton type="button" className={styles.scheduleCta} aria-label="Discuss financing — open Calendly">
            Discuss financing with Dr. Jan
          </ScheduleButton>
          <Link href="/contact" className={styles.contactPageLink}>
            Contact page (hours, address &amp; map)
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;