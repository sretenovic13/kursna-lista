let danas = new Date()

const dd = danas.getDate()

const mm = danas.getMonth()+1

const yyyy = danas.getFullYear()

danas = `${dd}.${mm}.${yyyy}`

const urlDatum = `https://api.kursna-lista.info/e04c1183a16dc2bf05af01f0cbae109c/kl_na_dan/${danas}/json`

let lista = []

$(document).ready(function(){
    $.ajax({
        url: urlDatum,
        dataType: 'jsonp',
        success: function(odgovor){
            lista = odgovor.result
            
            for(let i in lista){
                prikaziKursnuListu(lista[i],i)
            }
        },
        error: function(error){
            alert(error.message)
        }
    })
})

const prikaziKursnuListu = (podaziZaValutu, valuta) => {
    console.log(podaziZaValutu);

    const kursCatalog = document.getElementById("tableBody")

    if(valuta != "date"){
        const html =`
            <tr>
                <td>
                    <img src="images/kurs/${valuta}.png" alt="">
                    <span></span>
                </td>
                <td>${podaziZaValutu.kup}</td>
                <td>${podaziZaValutu.sre}</td>
                <td>${podaziZaValutu.pro}</td>
            </tr>
        `
        kursCatalog.innerHTML += html
    }
}
