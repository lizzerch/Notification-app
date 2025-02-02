document.getElementById('notificationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Ambil nilai input
    const customerName = document.getElementById('customerName').value;
    const cyberAnalysis = document.getElementById('cyberAnalysis').value;

    // Buat template notifikasi
    const notification = `
        <h2>Notifikasi untuk ${customerName}</h2>
        <p>Hasil analisis cyber:</p>
        <p>${cyberAnalysis}</p>
    `;

    // Tampilkan notifikasi
    document.getElementById('output').innerHTML = notification;
});