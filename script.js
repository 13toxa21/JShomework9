const URL_BLR = 'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0';
const URL = 'http://www.nbrb.by/API/ExRates/Currencies';
const blr = 'http://www.nbrb.by/API/ExRates/Rates[/{Cur_ID}]';

function getData(param){
    fetch(param)
    .then(response =>{
        response.json()
        .then(data => {
           let nbDol =document.getElementById('nb_dol');
           let nbEvr =document.getElementById('nb_evr');
           let nbRubl =document.getElementById('nb_rubl');
           let nbGr =document.getElementById('nb_Gr');
           let nbTeng =document.getElementById('nb_teng');
           nbDol.innerText = (data[4].Cur_OfficialRate);
           nbEvr.innerText = (data[5].Cur_OfficialRate);
           nbRubl.innerText = (data[16].Cur_OfficialRate);
           nbGr.innerText = (data[2].Cur_OfficialRate);
           nbTeng.innerText = (data[20].Cur_OfficialRate);

           document.getElementById('poc_dol').innerText = (((data[4].Cur_OfficialRate) * 1.0029).toFixed(4));
           document.getElementById('poc_evr').innerText = (((data[5].Cur_OfficialRate) * 1.00074).toFixed(4));
           document.getElementById('pok_rubl').innerText = (((data[16].Cur_OfficialRate) * 1.0067).toFixed(4));
           document.getElementById('pok_Gr').innerText = (((data[2].Cur_OfficialRate) * 1.0059).toFixed(4));
           document.getElementById('pok_teng').innerText = ((data[20].Cur_OfficialRate) / 2.88705);

           document.getElementById('pr_dol').innerText = (((data[4].Cur_OfficialRate) * 0.9924).toFixed(4));
           document.getElementById('pr_evr').innerText = (((data[5].Cur_OfficialRate) * 1.0025).toFixed(4));
           document.getElementById('pr_rubl').innerText = (((data[16].Cur_OfficialRate) * 0.9976).toFixed(4));
           document.getElementById('pr_Gr').innerText = (((data[2].Cur_OfficialRate) * 0.9981).toFixed(4));
           document.getElementById('pr_teng').innerText = (((data[20].Cur_OfficialRate) / 0.995534).toFixed(4));
           
           document.getElementById('kod_dol').innerText = (data[4].Cur_Abbreviation);
           document.getElementById('kod_evr').innerText = (data[5].Cur_Abbreviation);
           document.getElementById('kod_rubl').innerText = (data[16].Cur_Abbreviation);
           document.getElementById('kod_Gr').innerText = (data[2].Cur_Abbreviation);
           document.getElementById('kod_teng').innerText = (data[20].Cur_Abbreviation);

           document.getElementById('num_dol').innerText = (data[4].Cur_Scale);
           document.getElementById('num_evr').innerText = (data[5].Cur_Scale);
           document.getElementById('num_rubl').innerText = (data[16].Cur_Scale);
           document.getElementById('num_Gr').innerText = (data[2].Cur_Scale);
           document.getElementById('num_teng').innerText = (data[20].Cur_Scale);
        })
    })
}
getData(URL_BLR);


    function getValue (par){
        fetch(par)
        .then(response =>{
            response.json()
            .then(dat =>{
                let select = document.getElementById("valuta");
                let value = select.value;
                let a = document.getElementById('conv_BLR').value;
                let d = document.getElementById('nb_dol').innerHTML = (dat[4].Cur_OfficialRate);
                let e = document.getElementById('nb_dol').innerHTML = (dat[5].Cur_OfficialRate);
                let r = document.getElementById('nb_dol').innerHTML = (dat[16].Cur_OfficialRate);
                let g = document.getElementById('nb_dol').innerHTML = (dat[2].Cur_OfficialRate);
                let t = document.getElementById('nb_dol').innerHTML = (dat[20].Cur_OfficialRate);
                var c;
                if(value == 'dolar'){
                     c = a / d;
                     document.getElementById('result').value = c.toFixed(4); 
                 } 
                 if(value == 'evro'){
                    c = a / e;
                    document.getElementById('result').value = c.toFixed(4);  
                }
                if(value == 'r_rub'){
                    c = a / r*100;
                    document.getElementById('result').value = c.toFixed(4);  
                }
                if(value == 'grivna'){
                    c = a / g*100;
                    document.getElementById('result').value = c.toFixed(4); 
                }
                if(value == 'teng'){
                    c = a / t*1000;
                    document.getElementById('result').value = c.toFixed(4);  
                }
            })
        })
    }


function dating(){
let dat = new Date();
let day = dat.getDate();
let math = dat.getMonth();
math = math + 1;
let year = dat.getFullYear();
if(math <10){
    math = "0" + math;
}
document.getElementById('tit').innerHTML = ("Курсы валют на " + day +"."+ math +"."+ year);
}
dating();








