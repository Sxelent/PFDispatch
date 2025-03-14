const mockRoutes = {
    "MDPC-EGKK": [
        { 
            route: "KATOK2T DCT BANZAI COSTI BOGNA EGKK(26L/R, 08L/R)", 
            departureRunways: "08 & 09 DEP", 
            arrivalRunways: "26L/R, 08L/R ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "KATOK2T DCT MUNCHY SARGO WIZAD EGKK(26L/R)", 
            departureRunways: "08 & 09 DEP", 
            arrivalRunways: "26L/R ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "CHUMA2T DCT KOLBI NOVMA EGKK(08L/R)", 
            departureRunways: "08 & 09 DEP", 
            arrivalRunways: "08L/R ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "DCT PC113 HDWA BOGNA EGKK(26L/R, 08L/R)", 
            departureRunways: "26 & 27 DEP", 
            arrivalRunways: "26L/R, 08L/R ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        }
    ],
    "EGKK-MDPC": [
        { 
            route: "NOVMA1X DCT KOLBI POKEG POKEG1W MDPC(08, 09)", 
            departureRunways: "26L/R DEP", 
            arrivalRunways: "08 & 09 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "BOGNA1X DCT LOPRO TUPIK BETIR BETIR1W MDPC(08, 09)", 
            departureRunways: "26L/R DEP", 
            arrivalRunways: "08 & 09 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "NOVMA1X DCT LEDGO FALCON PIXAR MDPC(08, 09)", 
            departureRunways: "26L/R DEP", 
            arrivalRunways: "08 & 09 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "NOVMA1X DCT HDWA ODEGI MDPC(08, 09, 26, 27)", 
            departureRunways: "26L/R DEP", 
            arrivalRunways: "08, 09, 26, 27 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "DCT TUNBY ISKAL ENETA ODEGI MDPC(08, 09, 26, 27)", 
            departureRunways: "08L/R DEP", 
            arrivalRunways: "08, 09, 26, 27 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        }
    ],
    "MDPC-EFKT": [
        { 
            route: "KATOK2T DCT CARME UBER EFLA KEFLA3C EFKT(34)", 
            departureRunways: "08 & 09 DEP", 
            arrivalRunways: "34 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "KATOK2T DCT VAXRI MEROS KONAN SUDIP EFKT(34)", 
            departureRunways: "08 & 09 DEP", 
            arrivalRunways: "34 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "KATOK2T DCT HEAT MINTY KETF EFKT(16)", 
            departureRunways: "08 & 09 DEP", 
            arrivalRunways: "16 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "DCT PC113 JUMBO SARGO FRANE ROSE EFKT(34, 16)", 
            departureRunways: "26 & 27 DEP", 
            arrivalRunways: "34, 16 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        }
    ],
    "EFKT-MDPC": [
        { 
            route: "ROSE3C DCT WIZAD ZENITH BETIR BETIR1W MDPC(08, 09)", 
            departureRunways: "34 DEP", 
            arrivalRunways: "08 & 09 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "ROSE3C DCT AMDUT BRICK BREEZE MDPC(08, 09, 26, 27)", 
            departureRunways: "34 DEP", 
            arrivalRunways: "08, 09, 26, 27 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "DCT KONAN LUNIK KOPUD GOLVER MDPC(08, 09, 26, 27)", 
            departureRunways: "16 DEP", 
            arrivalRunways: "08, 09, 26, 27 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        }
    ],
    "MDPC-LEMH": [
        { 
            route: "KATOK2T DCT SYOL4 CARME LEMH(01)", 
            departureRunways: "08 & 09 DEP", 
            arrivalRunways: "01 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "KATOK2T DCT DANTE LUNIK LEMH(19)", 
            departureRunways: "08 & 09 DEP", 
            arrivalRunways: "19 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "DCT PC113 BREEZE HEAT LEMH(01, 19)", 
            departureRunways: "26 & 27 DEP", 
            arrivalRunways: "01, 19 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        }
    ],
    "LEMH-MDPC": [
        { 
            route: "ISKAL1D DCT TUPIK BETIR BETIR1W MDPC(08, 09)", 
            departureRunways: "01 DEP", 
            arrivalRunways: "08 & 09 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "ISKAL1D DCT FALCON PIXAR MDPC(08, 09)", 
            departureRunways: "01 DEP", 
            arrivalRunways: "08 & 09 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "ISKAL1D DCT KATOK MDPC(26, 27)", 
            departureRunways: "01 DEP", 
            arrivalRunways: "26 & 27 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "DCT CARME PALMO PIXAR MDPC(08, 09)", 
            departureRunways: "19 DEP", 
            arrivalRunways: "08 & 09 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "DCT CARME KATOK MDPC(26, 27)", 
            departureRunways: "19 DEP", 
            arrivalRunways: "26 & 27 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        }
    ],
    "MDPC-GCLP": [
        { 
            route: "KATOK2T DCT TUPIK GCLP(03L/R, 21L/R)", 
            departureRunways: "08 & 09 DEP", 
            arrivalRunways: "03L/R, 21L/R ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "DCT PC113 PIXAR GCLP(03L/R, 21L/R)", 
            departureRunways: "26 & 27 DEP", 
            arrivalRunways: "03L/R, 21L/R ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        }
    ],
    "GCLP-MDPC": [
        { 
            route: "ODEGI2A DCT MDPC(08, 09, 26, 27)", 
            departureRunways: "03L/R DEP", 
            arrivalRunways: "08, 09, 26, 27 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "ODEGI2B DCT MDPC(08, 09, 26, 27)", 
            departureRunways: "21L/R DEP", 
            arrivalRunways: "08, 09, 26, 27 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "COSTI4A DCT JELLY KATOK MDPC(26, 27)", 
            departureRunways: "03L/R DEP", 
            arrivalRunways: "26 & 27 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "COSTI4B DCT JELLY KATOK MDPC(26, 27)", 
            departureRunways: "21L/R DEP", 
            arrivalRunways: "26 & 27 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        }
    ],
    "MDPC-EGHI": [
        { 
            route: "KATOK2T DCT BANZAI OPERA BOGNA EGHI(02)", 
            departureRunways: "08 & 09 DEP", 
            arrivalRunways: "02 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "KATOK2T DCT BANZAI HARDY AMDUT KKS14 EGHI(02, 20)", 
            departureRunways: "08 & 09 DEP", 
            arrivalRunways: "02, 20 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "DCT PC113 FALCON LEDGO NOVMA EGHI(02, 20)", 
            departureRunways: "26 & 27 DEP", 
            arrivalRunways: "02, 20 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        }
    ],
    "EGHI-MDPC": [
        { 
            route: "DCT HAZEL NOVMA HDWA GOLVER MDPC(08, 09, 26, 27)", 
            departureRunways: "02 DEP", 
            arrivalRunways: "08, 09, 26, 27 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        },
        { 
            route: "DCT BOGNA DANTE ODEGI MDPC(08, 09, 26, 27)", 
            departureRunways: "20 DEP", 
            arrivalRunways: "08, 09, 26, 27 ARR",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        }
    ]
};

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
