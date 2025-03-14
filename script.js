const mockRoutes = {
    "MDPC-EGKK": [
        {            route: "KATOK2T DCT BANZAI COSTI BOGNA, 
            departureRunways: "08 & 09 DEP", 
            arrivalRunways: "26L/R, 08L/R ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "KATOK2T DCT MUNCHY SARGO WIZAD", 
            departureRunways: "08 & 09 DEP", 
            arrivalRunways: "26L/R ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "CHUMA2T DCT KOLBI NOVMA", 
            departureRunways: "08 & 09 DEP", 
            arrivalRunways: "08L/R ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "PC113 HDWA BOGNA, 
            departureRunways: "26 & 27 DEP", 
            arrivalRunways: "26L/R, 08L/R ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        }
    ],
    "EGKK-MDPC": [
        { 
            route: "NOVMA1X DCT KOLBI POKEG POKEG1W", 
            departureRunways: "26L/R DEP", 
            arrivalRunways: "08 & 09 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "BOGNA1X DCT LOPRO TUPIK BETIR BETIR1W", 
            departureRunways: "26L/R DEP", 
            arrivalRunways: "08 & 09 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "NOVMA1X DCT LEDGO FALCON PIXAR", 
            departureRunways: "26L/R DEP", 
            arrivalRunways: "08 & 09 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "NOVMA1X DCT HDWA ODEGI", 
            departureRunways: "26L/R DEP", 
            arrivalRunways: "08, 09, 26, 27 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "TUNBY ISKAL ENETA ODEGI", 
            departureRunways: "08L/R DEP", 
            arrivalRunways: "08, 09, 26, 27 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        }
    ],
    "MDPC-EFKT": [
        { 
            route: "KATOK2T DCT CARME UBER EFLA KEFLA3C", 
            departureRunways: "08 & 09 DEP", 
            arrivalRunways: "34 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "KATOK2T DCT VAXRI MEROS KONAN SUDIP", 
            departureRunways: "08 & 09 DEP", 
            arrivalRunways: "34 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "KATOK2T DCT HEAT MINTY KETF EFKT", 
            departureRunways: "08 & 09 DEP", 
            arrivalRunways: "16 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "PC113 JUMBO SARGO FRANE ROSE", 
            departureRunways: "26 & 27 DEP", 
            arrivalRunways: "34, 16 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        }
    ]


// Rest of the JavaScript code remains the same

function showRouteOptions() {
    const dep = document.getElementById('departure').value.toUpperCase();
    const arr = document.getElementById('arrival').value.toUpperCase();
    const routeKey = `${dep}-${arr}`;
    
    const routeOptionsDiv = document.getElementById('route-options');
    routeOptionsDiv.innerHTML = '';

    if (mockRoutes[routeKey]) {
        const runwayGroups = mockRoutes[routeKey].reduce((groups, route) => {
            const key = `${route.departureRunways} → ${route.arrivalRunways}`;
            if (!groups[key]) groups[key] = [];
            groups[key].push(route);
            return groups;
        }, {});

        for (const [runwayPair, routes] of Object.entries(runwayGroups)) {
            const groupDiv = document.createElement('div');
            groupDiv.className = 'runway-group';
            groupDiv.innerHTML = `<h4>${runwayPair}</h4>`;
            
            routes.forEach(route => {
                const routeOption = document.createElement('div');
                routeOption.className = 'route-option';
                routeOption.textContent = route.route;
                routeOption.onclick = () => {
                    document.getElementById('route').value = route.route;
                    document.getElementById('route-map').src = route.image;
                    document.getElementById('route-map-container').style.display = 'block';
                };
                groupDiv.appendChild(routeOption);
            });
            
            routeOptionsDiv.appendChild(groupDiv);
        }
    }
}

function generateOFP() {
    const route = document.getElementById('route').value;
    if (!route.trim()) {
        alert("Please select or enter a route!");
        return;
    }

    const ofpText = `
Callsign: ${document.getElementById('callsign').value || 'N/A'}
Aircraft: ${document.getElementById('aircraft').value || 'N/A'}
IFR/VFR: ${document.getElementById('flightRules').value}
Departing: ${document.getElementById('departure').value.toUpperCase()}
Arriving: ${document.getElementById('arrival').value.toUpperCase()}
CRZ FL: ${document.getElementById('crzAlt').value || 'N/A'}
Route: ${route}
    `;

    document.getElementById('ofp-content').textContent = ofpText;
    document.getElementById('ofp-display').style.display = 'block';
}

// Event listeners
document.getElementById('departure').addEventListener('input', showRouteOptions);
document.getElementById('arrival').addEventListener('input', showRouteOptions);
