// Initialize variables for tracking seats and payment
let selectedSeats = [];
const seatElements = document.querySelectorAll('.seat');
const selectedSeatsElement = document.getElementById('selected-seats');
const totalPaymentElement = document.getElementById('total-payment');
const standardCountElement = document.getElementById('standard-count');
const vipCountElement = document.getElementById('vip-count');

// Price values for standard and VIP seats
const STANDARD_PRICE = 200;
const VIP_PRICE = 450;

// Add event listeners to all seat elements
seatElements.forEach(seat => {
    seat.addEventListener('click', () => handleSeatSelection(seat));
});

// Function to handle seat selection
function handleSeatSelection(seat) {
    const isVip = seat.classList.contains('vip-seat');
    const seatId = seat.dataset.id;

    // Toggle selection state of the seat
    seat.classList.toggle('selected');

    // Check if the seat is already selected
    if (seat.classList.contains('selected')) {
        // If seat is selected, add it to the selectedSeats array
        selectedSeats.push(seatId);
    } else {
        // If seat is deselected, remove it from the selectedSeats array
        selectedSeats = selectedSeats.filter(s => s !== seatId);
    }

    // Update the UI after seat selection
    updateSeatInfo();
}

// Function to update the selected seat count and payment total
function updateSeatInfo() {
    // Calculate number of selected standard and VIP seats
    const selectedStandardSeats = document.querySelectorAll('.seat.selected:not(.vip-seat)').length;
    const selectedVipSeats = document.querySelectorAll('.seat.selected.vip-seat').length;

    // Calculate total price
    const totalPrice = (selectedStandardSeats * STANDARD_PRICE) + (selectedVipSeats * VIP_PRICE);

    // Update the display with selected seats and payment
    selectedSeatsElement.textContent = `Seats Selected: ${selectedSeats.length}`;
    totalPaymentElement.textContent = `Total: ₹${totalPrice}`;
    standardCountElement.textContent = selectedStandardSeats;
    vipCountElement.textContent = selectedVipSeats;
}