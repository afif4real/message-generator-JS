//Random message generator Afif


console.log('Start random message generator\n');


const generateRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const showMessage = (num) => {
    switch (num) {
        case 1:
            console.log('saya ramal anda akan menjadi backend engineer');
            break;
        case 2:
            console.log('saya ramal anda akan menjadi machine learning engineer\n');
            break;
        case 3:
            console.log('saya ramal anda tidak akan menjadi apa-apa hahahah\n');
            break;
        case 4:
            console.log('saya ramal anda akan tinggal di kolong jembatan kalo gini-gini terus\n');
            break;
        default:
            console.log('saya ramal anda akan sukses nantinya\n');
    }
}

number = generateRandomNum(1, 6);
console.log(number, 'adalah nomor keberuntungan anda')
showMessage(number);