// Fungsi untuk menyimpan data ke local storage
function saveAnalysis(title, content) {
    const analysis = {
        id: new Date().getTime(),
        title: title,
        content: content
    };
    let analyses = JSON.parse(localStorage.getItem('analyses')) || [];
    analyses.push(analysis);
    localStorage.setItem('analyses', JSON.stringify(analyses));
    displayAnalyses();
}

// Fungsi untuk menampilkan data dari local storage
function displayAnalyses() {
    const analyses = JSON.parse(localStorage.getItem('analyses')) || [];
    const analysisList = document.getElementById('analysisList');
    analysisList.innerHTML = '';
    analyses.forEach(analysis => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <strong>${analysis.title}</strong>
                <p>${analysis.content}</p>
            </div>
            <button onclick="deleteAnalysis(${analysis.id})">Hapus</button>
        `;
        analysisList.appendChild(li);
    });
}

// Fungsi untuk menghapus data dari local storage
function deleteAnalysis(id) {
    let analyses = JSON.parse(localStorage.getItem('analyses')) || [];
    analyses = analyses.filter(analysis => analysis.id !== id);
    localStorage.setItem('analyses', JSON.stringify(analyses));
    displayAnalyses();
}

// Event listener untuk form
document.getElementById('analysisForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('analysisTitle').value;
    const content = document.getElementById('analysisContent').value;
    saveAnalysis(title, content);
    this.reset();
});

// Tampilkan data saat halaman dimuat
displayAnalyses();