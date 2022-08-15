function Rnd(x){
    var rounded = Math.round(x/5)*5;
    return rounded;

}

function DBW(){

    var feet   = parseFloat(document.getElementById('feet').value) ;
    var inches = parseFloat(document.getElementById('inches').value);
    var cm     = (feet*12 + inches) * 2.54;
    var output = (cm - 100) - (.10 * (cm-100));    

    return output;
    
}

function calcBtn(){
    var output = DBW();
    if(Number.isNaN(output)){
        document.getElementById('outputForm').innerHTML = 'Please input both the forms';
    }else{
        console.log(output);
        document.getElementById('outputForm').innerHTML = output.toFixed(3) + " or " + Rnd(output) + " kg";
    }
}

function TER(){
    
    var dbw = parseFloat(document.getElementById('DBWout').value);
    const radioButtons = document.querySelectorAll('input[name="PAL"]');
    let pal;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            pal = radioButton.value;
            break;
        }
    }

    console.log(pal);
    if(Number.isNaN(dbw)){
        document.getElementById('TERForm').innerHTML = 'Please input DBW'
    }else{
        document.getElementById('sedentary').disabled = false;
        document.getElementById('light').disabled = false;
        document.getElementById('moderate').disabled = false;
        document.getElementById('vigor').disabled = false;

        if(pal == 'Sedentary')     { document.getElementById('TERForm').innerHTML = String(dbw * 30) + " kcal";
        }else if(pal == 'Light')   { document.getElementById('TERForm').innerHTML = String(dbw * 35) + " kcal";
        }else if(pal == 'Moderate'){ document.getElementById('TERForm').innerHTML = String(dbw * 40) + " kcal";
        }else if(pal == 'Vigorous'){ document.getElementById('TERForm').innerHTML = String(dbw * 45) + " kcal"; }
    } 
}

function centSum(){
    document.getElementById('carbohydrate').disabled = false;
    document.getElementById('protein').disabled = false;
    document.getElementById('fat').disabled = false;

    var Ter     = parseFloat(document.getElementById('TERout').value)
    var carb    = parseFloat(document.getElementById('carbohydrate').value);
    var protein = parseFloat(document.getElementById('protein').value);
    var fat     = parseFloat(document.getElementById('fat').value);

    var carbCent    = Ter * (carb/100);
    var proteinCent = Ter * (protein/100);
    var fatCent     = Ter * (fat/100);
    var sum         = carb + protein + fat;

    if(sum <100 || sum>100){
        document.getElementById('AMDRBOX').style.borderColor = "red";
    }else{
        document.getElementById('AMDRBOX').style.borderColor = "green";
    }

    document.getElementById('AMDR').innerHTML = String(sum) + "%";

    document.getElementById('carbCent').innerHTML    = "Carbohydrates: " + String(carbCent.toFixed(2))    + " kcal, " + String((carbCent/4).toFixed(2))    + " grams" + "(" + String(carb)    + "%)"; 
    document.getElementById('proteinCent').innerHTML = "Protein: "       + String(proteinCent.toFixed(2)) + " kcal, " + String((proteinCent/4).toFixed(2)) + " grams" + "(" + String(protein) + "%)";
    document.getElementById('fatCent').innerHTML     = "Fat: "           + String(fatCent.toFixed(2))     + " kcal, " + String((fatCent/9).toFixed(2))     + " grams" + "(" + String(fat)     + "%)";   
}



function reset(){
    document.getElementById('feet').value   = null;
    document.getElementById('inches').value = null;
    document.getElementById('outputForm').innerHTML = 'Result comes here';
}

function exchanges(){
    var VegInput = parseFloat(document.getElementById('VegInput').value);
    var carbVeg  = VegInput * 3;
    var protVeg  = VegInput;    
    var totalVeg = carbVeg * 4 + protVeg * 4;
    document.getElementById('carbVeg').innerHTML = String(carbVeg);
    document.getElementById('protVeg').innerHTML = String(protVeg);
    document.getElementById('totalVeg').innerHTML = String(totalVeg);

    var FruitInput = parseFloat(document.getElementById('FruitInput').value);
    var carbFruit  = FruitInput * 10;
    var totalFruit = carbFruit * 4;
    document.getElementById('carbFruit').innerHTML = String(carbFruit);
    document.getElementById('totalFruit').innerHTML = String(totalFruit);

    var WMilkInput = parseFloat(document.getElementById('WMilkInput').value);
    var carbWMilk  = WMilkInput * 12;
    var protWMilk  = WMilkInput * 8;    
    var fatWMilk   = WMilkInput *10;
    var totalWMilk = carbWMilk * 4 + protWMilk * 4 + fatWMilk * 9;

    document.getElementById('carbWMilk').innerHTML = String(carbWMilk);
    document.getElementById('protWMilk').innerHTML = String(protWMilk);
    document.getElementById('fatWMilk').innerHTML = String(fatWMilk);
    document.getElementById('totalWMilk').innerHTML = String(totalWMilk);

    var LFMilkInput = parseFloat(document.getElementById('LFMilkInput').value);
    var carbLFMilk  = LFMilkInput * 12;
    var protLFMilk  = LFMilkInput * 8;    
    var fatLFMilk   = LFMilkInput * 5;
    var totalLFMilk = carbLFMilk * 4 + protLFMilk * 4 + fatLFMilk * 9;

    document.getElementById('carbLFMilk').innerHTML = String(carbLFMilk);
    document.getElementById('protLFMilk').innerHTML = String(protLFMilk);
    document.getElementById('fatLFMilk').innerHTML = String(fatLFMilk);
    document.getElementById('totalLFMilk').innerHTML = String(totalLFMilk);

    var NFMilkInput = parseFloat(document.getElementById('NFMilkInput').value);
    var carbNFMilk  = NFMilkInput * 12;
    var protNFMilk  = NFMilkInput * 8;    
    var totalNFMilk = carbNFMilk * 4 + protNFMilk * 4;

    document.getElementById('carbNFMilk').innerHTML = String(carbNFMilk);
    document.getElementById('protNFMilk').innerHTML = String(protNFMilk);
    document.getElementById('totalNFMilk').innerHTML = String(totalNFMilk);

    var SugarInput = parseFloat(document.getElementById('SugarInput').value);
    var carbSugar  = SugarInput * 5;
    var totalSugar = carbSugar * 4;
    
    document.getElementById('carbSugar').innerHTML = String(carbSugar);
    document.getElementById('totalSugar').innerHTML = String(totalSugar);
    
    var RiceAInput = parseFloat(document.getElementById('RiceAInput').value);
    var carbRiceA  = RiceAInput * 23;
    var totalRiceA = carbRiceA * 4;
    document.getElementById('carbRiceA').innerHTML = String(carbRiceA);
    document.getElementById('totalRiceA').innerHTML = String(totalRiceA);

    var RiceBInput = parseFloat(document.getElementById('RiceBInput').value);
    var carbRiceB  = RiceBInput * 23;
    var protRiceB  = RiceBInput * 2;    
    var totalRiceB = carbRiceB * 4 + protRiceB * 4;
    document.getElementById('carbRiceB').innerHTML = String(carbRiceB);
    document.getElementById('protRiceB').innerHTML = String(protRiceB);
    document.getElementById('totalRiceB').innerHTML = String(totalRiceB);

    var RiceCInput = parseFloat(document.getElementById('RiceCInput').value);
    var carbRiceC  = RiceCInput * 23;
    var protRiceC  = RiceCInput * 4;    
    var totalRiceC = carbRiceC * 4 + protRiceC * 4;
    document.getElementById('carbRiceC').innerHTML = String(carbRiceC);
    document.getElementById('protRiceC').innerHTML = String(protRiceC);
    document.getElementById('totalRiceC').innerHTML = String(totalRiceC);

    var LFMeatInput = parseFloat(document.getElementById('LFMeatInput').value);
    var protLFMeat  = LFMeatInput * 8;
    var fatLFMeat   = LFMeatInput;
    var totalLFMeat = protLFMeat * 4 + fatLFMeat * 9;
    document.getElementById('protLFMeat').innerHTML = String(protLFMeat);
    document.getElementById('fatLFMeat').innerHTML = String(fatLFMeat);
    document.getElementById('totalLFMeat').innerHTML = String(totalLFMeat);

    var MFMeatInput = parseFloat(document.getElementById('MFMeatInput').value);
    var protMFMeat  = MFMeatInput * 8;
    var fatMFMeat   = MFMeatInput * 6   ;
    var totalMFMeat = protMFMeat * 4 + fatMFMeat * 9;
    document.getElementById('protMFMeat').innerHTML = String(protMFMeat);
    document.getElementById('fatMFMeat').innerHTML = String(fatMFMeat);
    document.getElementById('totalMFMeat').innerHTML = String(totalMFMeat);

    var HFMeatInput = parseFloat(document.getElementById('HFMeatInput').value);
    var protHFMeat  = HFMeatInput * 8;
    var fatHFMeat   = HFMeatInput * 10   ;
    var totalHFMeat = protHFMeat * 4 + fatHFMeat * 9;
    document.getElementById('protHFMeat').innerHTML = String(protHFMeat);
    document.getElementById('fatHFMeat').innerHTML = String(fatHFMeat);
    document.getElementById('totalHFMeat').innerHTML = String(totalHFMeat);

    var FatInput = parseFloat(document.getElementById('FatInput').value);
    var fatFat = FatInput * 5;
    var totalFat = fatFat * 9;
    document.getElementById('fatFat').innerHTML = String(fatFat);
    document.getElementById('totalFat').innerHTML = String(totalFat);

    var finalTotal = totalVeg + totalFruit + totalWMilk + totalLFMilk + totalNFMilk + totalSugar + totalRiceA + totalRiceB + totalRiceC + totalLFMeat + totalMFMeat + totalHFMeat + totalFat
    var carb       = parseFloat(document.getElementById('carbohydrate').value);
    var protein    = parseFloat(document.getElementById('protein').value);
    var fat        = parseFloat(document.getElementById('fat').value);

    
    document.getElementById('carbTotal').innerHTML = String(((finalTotal * (carb/100))   /4).toFixed(0))    + " kcal";
    document.getElementById('protTotal').innerHTML = String(((finalTotal * (protein/100))/4).toFixed(0)) + " kcal";
    document.getElementById('fatTotal').innerHTML  = String(((finalTotal * (fat/100))    /9).toFixed(0))     + " kcal";

    document.getElementById('finalTotal').innerHTML = String(finalTotal) + " kcal";

}
