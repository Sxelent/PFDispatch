const mockRoutes = {
    "MDPC-EGKK": [
        { 
            route: "KATOK2T BANZAI OPERA KUNAV KUNAV1G", 
            departureRunways: "08 & 09 DEP", 
            arrivalRunways: "26L ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "KATOK2T BANZAI OPERA LIZAD VASUX VASUX1G", 
            departureRunways: "08 & 09 DEP", 
            arrivalRunways: "08R ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        }
    ],
    "MDPC-GCLP": [
        { 
            route: "KATOK2T LALTO LORPO LORPO1C", 
            departureRunways: "08 & 09 DEP", 
            arrivalRunways: "21L & 21R ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "KATOK2T LALTO LP103 BANZAI DRANO LP101", 
            departureRunways: "08 & 09 DEP", 
            arrivalRunways: "03L & 03R ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        }
    ],
    "EGKK-MDPC": [
        { 
            route: "NOVMA1X LEDGO FALCON POKEG POKEG1W", 
            departureRunways: "26L DEP", 
            arrivalRunways: "08 & 09 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "IMVUR1Z NOVMA ROGER FALCON POKEG POKEG1W", 
            departureRunways: "08R DEP", 
            arrivalRunways: "08 & 09 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        }
    ],
    "EGKK-GCLP": [
        { 
            route: "NOVMA1X ROGER BRICK ORTIS5C", 
            departureRunways: "26L DEP", 
            arrivalRunways: "21L & 21R ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "IMVUR1Z NOVMA ROGER BRICK ORTIS5C", 
            departureRunways: "08R DEP", 
            arrivalRunways: "21L & 21R ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "NOVMA1X ROGER BRICK KONBA4B", 
            departureRunways: "26L DEP", 
            arrivalRunways: "03L & 03R ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "IMVUR1Z NOVMA ROGER BRICK KONBA4B", 
            departureRunways: "08R DEP", 
            arrivalRunways: "03L & 03R ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        }
    ],
    "EGKK-MDST": [
        { 
            route: "NOVMA1X LEDGO FALCON POKEG PC115 PC113", 
            departureRunways: "26L DEP", 
            arrivalRunways: "29 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "IMVUR1Z NOVMA ROGER FALCON POKEG PC115 PC113", 
            departureRunways: "08R DEP", 
            arrivalRunways: "29 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        }
    ],
    "GCLP-MDPC": [
        { 
            route: "KOPUD1B BRICK FALCON POKEG POKEG1W", 
            departureRunways: "21L & 21R DEP", 
            arrivalRunways: "08 & 09 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "KOPUD1A BRICK FALCON POKEG POKEG1W", 
            departureRunways: "21L & 21R DEP", 
            arrivalRunways: "08 & 09 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        }
    ]
};

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