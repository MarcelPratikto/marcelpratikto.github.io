// ====================================
// MODAL FUNCTIONS FOR REPORT VIEWER
// ====================================

/**
 * Opens the report modal and prevents background scrolling
 */
function openReportModal() {
    document.getElementById('reportModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

/**
 * Closes the report modal and re-enables background scrolling
 */
function closeReportModal() {
    document.getElementById('reportModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable background scrolling
}

// ====================================
// EVENT LISTENERS
// ====================================

/**
 * Close modal when clicking outside of it
 */
window.onclick = function(event) {
    const modal = document.getElementById('reportModal');
    if (event.target === modal) {
        closeReportModal();
    }
}

/**
 * Close modal with Escape key
 */
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeReportModal();
    }
});

/**
 * Ensure modal is closed when page loads
 */
document.addEventListener('DOMContentLoaded', function() {
    // Close modal if it's somehow open on page load
    closeReportModal();
});