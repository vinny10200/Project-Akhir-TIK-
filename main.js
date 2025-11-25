// University Data
// University Data
const universities = [
    {
        name: "NYU",
        city: "New York City",
        image: "https://uniplusglobal.com/media/university_images/New_York_University_439e3d1807.webp",
        acceptanceRate: "7.7%",
        website: "https://www.nyu.edu",
        priceInternational: "$53,208",
        priceNational: "$53,208",
        scholarships: ["Merit-based", "Need-based"],
        costBreakdown: {
            Tuition: 40000,
            Housing: 8000,
            Food: 4000,
            Misc: 2208
        }
    },
    {
        name: "Tsinghua University",
        city: "Beijing",
        image: "https://www.sist.tsinghua.edu.cn/sisten/img/banner2_dltfs1920740.jpg",
        acceptanceRate: "30%",
        website: "https://www.tsinghua.edu.cn",
        priceInternational: "¥40,000",
        priceNational: "¥40,000",
        scholarships: ["Academic Excellence", "Government Scholarships"],
        costBreakdown: {
            Tuition: 25000,
            Housing: 8000,
            Food: 5000,
            Misc: 2000
        }
    },
    {
        name: "Columbia",
        city: "New York City",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkCnobgRcVHUv6lORTXm8Obnug2LiPVirwg&s",
        acceptanceRate: "4.2%",
        website: "https://www.columbia.edu",
        priceInternational: "$61,850",
        priceNational: "$61,850",
        scholarships: ["Need-based", "Merit-based"],
        costBreakdown: {
            Tuition: 45000,
            Housing: 9000,
            Food: 4000,
            Misc: 6850
        }
    },
    {
        name: "Boston College",
        city: "Chestnut Hill",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJh5wgamIC9UjqdqCr-iP0pjrR4tEv64mM6g&s",
        acceptanceRate: "12.6%",
        website: "https://www.bc.edu",
        priceInternational: "$58,056",
        priceNational: "$58,056",
        scholarships: ["Merit-based", "Athletic Scholarships"],
        costBreakdown: {
            Tuition: 43000,
            Housing: 9000,
            Food: 4000,
            Misc: 6056
        }
    },
    {
        name: "NTU",
        city: "Singapore",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24MlyjE1WIRVKFE59_SAAvO4BmyMAGkaxBw&s",
        acceptanceRate: "35%",
        website: "https://www.ntu.edu.sg",
        priceInternational: "SGD 29,000",
        priceNational: "SGD 8,000",
        scholarships: ["Academic Excellence", "Sports Scholarships"],
        costBreakdown: {
            Tuition: 18000,
            Housing: 6000,
            Food: 3000,
            Misc: 1000
        }
    },
    {
        name: "NUS",
        city: "Singapore",
        image: "https://gov-web.s3.ap-northeast-1.amazonaws.com/uploads/2018/04/NUS-ERC.jpg",
        acceptanceRate: "8%",
        website: "https://www.nus.edu.sg",
        priceInternational: "SGD 38,000",
        priceNational: "SGD 10,000",
        scholarships: ["Merit-based", "Need-based"],
        costBreakdown: {
            Tuition: 20000,
            Housing: 7000,
            Food: 4000,
            Misc: 1000
        }
    },
    {
        name: "HKU",
        city: "Hong Kong",
        image: "https://i.ytimg.com/vi/U6M2b5ZID_c/maxresdefault.jpg",
        acceptanceRate: "34%",
        website: "https://www.hku.hk",
        priceInternational: "HKD 140,000",
        priceNational: "HKD 42,000",
        scholarships: ["Government Scholarships", "Merit-based"],
        costBreakdown: {
            Tuition: 70000,
            Housing: 35000,
            Food: 25000,
            Misc: 10000
        }
    },
    {
        name: "CUHK",
        city: "Hong Kong",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ksESW02eScB21j2WhcRSZ5OCVk29SLfFoQ&s",
        acceptanceRate: "12%",
        website: "https://www.cuhk.edu.hk",
        priceInternational: "HKD 140,000",
        priceNational: "HKD 42,000",
        scholarships: ["Merit-based", "Need-based"],
        costBreakdown: {
            Tuition: 70000,
            Housing: 35000,
            Food: 25000,
            Misc: 10000
        }
    },
    {
        name: "Monash",
        city: "Melbourne",
        image: "https://accommodationforstudents.com/cdn-cgi/image/f=auto,q=85,w=960/https://images.accommodationforstudents.com/website/university-guides/au/monash-university/uni.jpg",
        acceptanceRate: "40%",
        website: "https://www.monash.edu",
        priceInternational: "AUD 40,000",
        priceNational: "AUD 10,000",
        scholarships: ["Academic Excellence", "Research Scholarships"],
        costBreakdown: {
            Tuition: 20000,
            Housing: 12000,
            Food: 5000,
            Misc: 3000
        }
    },
    {
        name: "University of Sydney",
        city: "Sydney",
        image: "https://universityreviews.com.au/students/wp-content/uploads/2015/10/University-of-Sydney-campus.jpg",
        acceptanceRate: "30%",
        website: "https://www.sydney.edu.au",
        priceInternational: "AUD 42,000",
        priceNational: "AUD 10,000",
        scholarships: ["Merit-based", "Need-based"],
        costBreakdown: {
            Tuition: 21000,
            Housing: 12000,
            Food: 6000,
            Misc: 3000
        }
    }
];

// Chart creation function using Chart.js
function createCostChart(canvasId, costBreakdown) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    const labels = Object.keys(costBreakdown);
    const data = Object.values(costBreakdown);
    const colors = [
        '#FFD700', // Tuition - Gold
        '#DAA520', // Housing - Goldenrod
        '#B8860B', // Food - DarkGoldenRod
        '#808000'  // Misc - Olive
    ];

    if(window.costChartInstance) {
        window.costChartInstance.destroy();
    }

    window.costChartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#f0e68c' // light golden labels
                    }
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: '#333',
                    titleColor: '#FFD700',
                    bodyColor: '#f0e68c'
                }
            }
        }
    });

    return window.costChartInstance;
}

// Elements references
const navHome = document.getElementById('nav-home');
const navUniversityList = document.getElementById('nav-university-list');
const homePage = document.getElementById('home-page');
const universityListPage = document.getElementById('university-list-page');
const assessmentPage = document.getElementById('assessment-page');
const universityListDiv = document.getElementById('university-list');
const btnAssessment = document.getElementById('btn-assessment');
const btnUniversityList = null; // Element does not exist in HTML, avoid error
const assessmentForm = document.getElementById('assessment-form');
const assessmentResults = document.getElementById('assessment-results');
const btnBack = document.getElementById('btn-back');
const universityModal = new bootstrap.Modal(document.getElementById('universityModal'));
const universityModalLabel = document.getElementById('universityModalLabel');
const universityModalBody = document.getElementById('universityModalBody');
const universityLink = document.getElementById('university-link');

// Show a specific page and update nav active state
function showPage(pageId) {
    homePage.classList.add('d-none');
    universityListPage.classList.add('d-none');
    assessmentPage.classList.add('d-none');
    navHome.classList.remove('active');
    navUniversityList.classList.remove('active');

    switch(pageId) {
        case 'home':
            homePage.classList.remove('d-none');
            navHome.classList.add('active');
            break;
        case 'university-list':
            universityListPage.classList.remove('d-none');
            navUniversityList.classList.add('active');
            populateUniversityList();
            break;
        case 'assessment':
            assessmentPage.classList.remove('d-none');
            break;
    }
}

// Map acceptance rate string to border class
function borderColorClass(acceptanceRateStr) {
    const rateNum = parseFloat(acceptanceRateStr);
    if (rateNum < 15) return 'border-red';
    if (rateNum >= 15 && rateNum <= 35) return 'border-yellow';
    return 'border-green';
}

// Populate universities list with diagonal card layout including image, city and acceptance rate with border colors
function populateUniversityList() {
    universityListDiv.innerHTML = '';
    universities.forEach((uni, index) => {
        const card = document.createElement('div');
        card.className = `university-card ${borderColorClass(uni.acceptanceRate)}`;
        card.tabIndex = 0;
        card.setAttribute('role', 'button');
        card.setAttribute('aria-pressed', 'false');
        card.setAttribute('aria-label', `${uni.name}, located in ${uni.city}, acceptance rate ${uni.acceptanceRate}`);

        // University image
        const imgDiv = document.createElement('div');
        imgDiv.className = 'university-image';
        imgDiv.style.backgroundImage = `url('${uni.image}')`;
        card.appendChild(imgDiv);

        // University info
        const infoDiv = document.createElement('div');
        infoDiv.className = 'uni-info';
        infoDiv.innerHTML = `<h5>${uni.name}</h5><p class="city">${uni.city}</p><p class="acceptance-rate">Acceptance Rate: ${uni.acceptanceRate}</p>`;
        card.appendChild(infoDiv);

        card.addEventListener('click', () => {
            showUniversityModal(index);
        });
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                showUniversityModal(index);
            }
        });

        universityListDiv.appendChild(card);
    });
}

// Show university details modal with campus images and cost breakdown chart
function showUniversityModal(index) {
    const uni = universities[index];
    universityModalLabel.textContent = uni.name;
    universityModalBody.innerHTML = `
        <p><strong>City:</strong> ${uni.city}</p>
        <p><strong>Acceptance Rate:</strong> ${uni.acceptanceRate}</p>
        <p><strong>Estimated Price Per Semester:</strong></p>
        <ul>
            <li><strong>International Students:</strong> ${uni.priceInternational}</li>
            <li><strong>National Students:</strong> ${uni.priceNational}</li>
        </ul>
        <p><strong>Scholarships Offered:</strong></p>
        <ul>
            ${uni.scholarships.map(sch => `<li>${sch}</li>`).join('')}
        </ul>
        <div class="chart-container">
            <canvas id="costChart"></canvas>
        </div>
    `;
    universityLink.href = uni.website;
    universityModal.show();

    // Delay chart creation to ensure canvas is in DOM
    setTimeout(() => {
        if(window.costChartInstance) {
            window.costChartInstance.destroy();
        }
        window.costChartInstance = createCostChart('costChart', uni.costBreakdown);
    }, 200);
}


// Assessment logic to filter universities based on GPA and financial capacity
function assessUniversities(gpa, financialCapacity) {
    // convert financialCapacity to a numeric level for comparison
    const financialLevelMap = { low: 1, medium: 2, high: 3 };
    const studentFinancialLevel = financialLevelMap[financialCapacity] || 1;

    return universities.filter(uni => {
        let gpaPass = false;
        let financialPass = false;

        // Example GPA filter (mock)
        if (gpa >= 3.7) gpaPass = true;
        else if (gpa >= 3.0) gpaPass = uni.acceptanceRate.replace('%','') * 1 > 30; // easier acceptance for lower GPA
        else gpaPass = false;

        // Example financial filter (mock)
        let uniPriceLevel = 1; // low price
        const priceIntl = uni.priceInternational.toString().toLowerCase();

        if (priceIntl.includes('usd') || priceIntl.includes('$') || priceIntl.includes('aud') || priceIntl.includes('sgd'))
            uniPriceLevel = 3;
        else if (priceIntl.includes('hk') || priceIntl.includes('¥'))
            uniPriceLevel = 2;

        financialPass = studentFinancialLevel >= uniPriceLevel;

        return gpaPass && financialPass;
    });
}

// Event listeners
navHome.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Nav Home clicked');
    showPage('home');
});

navUniversityList.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Nav University List clicked');
    showPage('university-list');
});

btnAssessment.addEventListener('click', () => {
    console.log('Assessment button clicked');
    showPage('assessment');
    assessmentResults.innerHTML = '';
    assessmentForm.reset();
});

if (btnUniversityList) {
    btnUniversityList.addEventListener('click', () => {
        console.log('University List button clicked');
        showPage('university-list');
    });
}

btnBack.addEventListener('click', () => {
    console.log('Back button clicked');
    showPage('home');
});


assessmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Assessment form submitted');
    assessmentResults.innerHTML = '';
    const gpa = parseFloat(document.getElementById('gpa').value);
    const financialCapacity = document.getElementById('financialCapacity').value;

    if (isNaN(gpa) || !financialCapacity) {
        assessmentResults.innerHTML = '<div class="alert alert-danger">Please fill out all fields correctly.</div>';
        return;
    }
    
    const results = assessUniversities(gpa, financialCapacity);

    if (results.length === 0) {
        assessmentResults.innerHTML = '<div class="alert alert-warning">No universities found matching your criteria.</div>';
        return;
    }

    // Display results as plain text list items only
    const resultList = document.createElement('ul');
    resultList.className = 'list-group';
    results.forEach((uni) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = uni.name;
        resultList.appendChild(li);
    });

    assessmentResults.appendChild(resultList);
    // Ensure the assessment page is shown to display results
    showPage('assessment');
});

// Initial setup on page load
document.addEventListener('DOMContentLoaded', () => {
    populateUniversityList();
    showPage('home');

    // Add simple fade-in animation for main container
    const container = document.querySelector('.container');
    container.classList.add('opacity-0');
    setTimeout(() => container.classList.remove('opacity-0'), 100);
});
