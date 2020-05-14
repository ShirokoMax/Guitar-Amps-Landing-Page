let amps = [ {"name": "AS50D",
            "price": 500,
            "speakers": "2x8\" plus tweeter",
            "wattage": 50,
            "technology": "Solid State",
            "effects": ["Reverb", "Chorus"]
        },
            {"name": "MG15R",
            "price": 160,
            "speakers": "1x8\"",
            "wattage": 15,
            "technology": "Solid State",
            "effects": ["Reverb"]
        },
            {"name": "MG250DFX",
            "price": 520,
            "speakers": "2x12\"",
            "wattage": 100,
            "technology": "Solid State",
            "effects": ["Reverb", "Chorus", "Delay", "Flange"]
        }
];
// Marshall 
let ampImg = document.querySelector('.product__image');
let ampName = document.querySelector('.product__name');
let ampPrice = document.querySelector('.product__price');
let ampMainChar = document.querySelector('.product__main-characteristic');
let ampWattage =  document.querySelector('.product__wattage');
let ampTechnology =  document.querySelector('.product__technology');
let ampEffects =  document.querySelector('.product__effects');

function changeAmp(value) {
    for(let i = 0; i < amps.length; i++) {
        if (amps[i].name == value) {
            ampImg.src = `assets/images/Marshall ${value}.jpg`;
            ampImg.alt = `Marshall ${value} Guitar Amp`;
            ampName.innerHTML = `Marshall ${value}`;
            ampPrice.innerHTML = `${amps[i].price}$`;
            ampMainChar.innerHTML = amps[i].speakers;
            ampWattage.innerHTML = `${amps[i].wattage}W`;
            ampTechnology.innerHTML = amps[i].technology;
            ampEffects.innerHTML = amps[i].effects.join(', ');
        }
    }
}

let as50d = document.getElementById("AS50D");
let mg15r = document.getElementById("MG15R");
let mg250dfx = document.getElementById("MG250DFX");
as50d.addEventListener( "click", () =>  changeAmp('AS50D') );
mg15r.addEventListener( "click", () =>  changeAmp('MG15R') );
mg250dfx.addEventListener( "click", () => changeAmp('MG250DFX') );