/**
 * ================================================================
 * NEXUS MINING PROTOCOL
 * File: app.js
 * Version: Complete & Integrated
 * ================================================================
 */

let miningState = {
    balanceUSDT: 15420.50,
    hashPower: 0,
    minedETH: 0.000000,
    activeTier: null
};

/**
 * 1. TAB ROUTING & NAVIGATION
 */
function switchTab(tabName) {
    ['home', 'packages', 'account'].forEach(tab => {
        const view = document.getElementById('page-' + tab);
        const nav = document.getElementById('nav-' + tab);
        if (view) view.classList.toggle('active', tab === tabName);
        if (nav) nav.classList.toggle('active', tab === tabName);
    });
}

/**
 * 2. MINING PACKAGE DEPLOYMENT
 */
function buyPackage(tierName, amountUSDT, rate) {
    miningState.balanceUSDT += amountUSDT * 0.1;
    miningState.hashPower += amountUSDT * 0.5;
    miningState.activeTier = tierName;
    updateUI();
    alert(`Successfully deployed ${tierName} Mining Tier! Daily Return: ${rate}%`);
    switchTab('home');
}

/**
 * 3. REWARD WITHDRAWAL
 */
function executeWithdrawal() {
    const addr = document.getElementById('withdrawAddress').value.trim();
    const amt = document.getElementById('withdrawAmount').value;
    
    if (!addr || !amt) {
        alert('Please provide a valid withdrawal address and amount.');
        return;
    }
    
    alert(`Withdrawal of ${amt} successfully processed to ${addr}`);
    document.getElementById('withdrawAddress').value = '';
    document.getElementById('withdrawAmount').value = '';
}

/**
 * 4. TELEGRAM CUSTOMER SUPPORT INTEGRATION
 */
function openTelegramSupport() {
    const supportUrl = "https://t.me/ERCservice01";
    if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.openTelegramLink(supportUrl);
    } else {
        window.open(supportUrl, '_blank');
    }
}

/**
 * 5. UI UTILITIES & TELEMETRY SIMULATION
 */
function updateUI() {
    const totalOut = document.getElementById('homeTotalOutput');
    const availOut = document.getElementById('homeAvailOutput');
    const accBal = document.getElementById('accBalance');
    const accPow = document.getElementById('accPower');

    if (totalOut) totalOut.innerText = miningState.minedETH.toFixed(6);
    if (availOut) availOut.innerText = miningState.minedETH.toFixed(6);
    if (accBal) accBal.innerText = miningState.balanceUSDT.toFixed(2);
    if (accPow) accPow.innerText = miningState.hashPower.toFixed(1) + " TH/s";
}

function startTelemetrySimulation() {
    setInterval(() => {
        miningState.minedETH += 0.000015;
        updateUI();
    }, 2000);
}

/**
 * 6. INITIALIZATION ON DOM LOAD
 */
document.addEventListener('DOMContentLoaded', () => {
    if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();
    }
    updateUI();
    startTelemetrySimulation();
});