// Demo : functions

var hesapA = {
    ad : 'Sena Turan',
    hesapNo : '5255214',
    bakiye : 2000,
    ekHesap : 1000
}

var hesapB = {
    ad : 'Emel Turan',
    hesapNo : '6658550',
    bakiye : 3000,
    ekHesap : 2000
}


function paraCek(hesap,miktar){
    console.log(`Merhaba ${hesap.ad}`);

    if(hesap.bakiye >= miktar){
        console.log('paranızı alabilirsiniz');
        hesap.bakiye-= miktar;
    }
    else{
        var toplam = hesap.bakiye + hesap.ekHesap;

        if(toplam >= miktar){
            if(confirm('ek hesabınızı kullanmak ister misiniz')){
                console.log('paranızı alabilirsiniz');
                var bakiye = hesap.bakiye;
                var ekhesap = miktar - bakiye;
                hesap.bakiye = 0;
                hesap.ekHesap -= ekhesap;
            }
            else{
                console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} TL bulunmamaktadır.`);
            }
        }
        else{
            console.log('üzgünüz bakiye yetersiz');
        }
    }

}

paraCek(hesapA,2000);
paraCek(hesapA,1000);
// paraCek(hesapA,2000);