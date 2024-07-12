document.getElementById('getIpInfo').addEventListener('click', function() {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            const ipInfoDiv = document.getElementById('ipInfo');
            ipInfoDiv.innerHTML = `
                <p><strong>IP:</strong> ${data.ip}</p>
                <p><strong>Shahar:</strong> ${data.city}</p>
                <p><strong>Region:</strong> ${data.region}</p>
                <p><strong>Davlat:</strong> ${data.country_name}</p>
                <p><strong>Internet provayder:</strong> ${data.org}</p>
                <p><strong>Davlat nomer codi:</strong> ${data.country_calling_code}</p>
                <p><strong>Valyuta:</strong> ${data.currency}</p>
                <p><strong>Valyuta nomi:</strong> ${data.currency_name}</p>
            `;
        })
        .catch(error => {
            console.error('Xato:', error);
            document.getElementById('ipInfo').innerHTML = '<p>Ma\'lumotlarni olishda xato yuz berdi.</p>';
        });
});
