var pesan = 'hallo doscom'
        const nilaiAkhir = 10
        const nilaiTugas = 9

        console.log('____________________________________________')
        // kondisi
        if (nilaiAkhir > nilaiTugas) {
            console.log('Nilai akhir lebih besar')
        } else {
            console.log('Nilai tugas lebih besar')
        }               

        if (nilaiAkhir != nilaiTugas) {
            console.log('Nilai tidak sama')
        } else {
            console.log('Nilai sama')            
        }

        console.log('____________________________________________')
        // inline kondisi
        if (nilaiAkhir != nilaiTugas) console.log('nilai beda')

        console.log('____________________________________________')
        // tenary condition
        const tenary = nilaiAkhir > nilaiTugas ? 'nilai akhir' : 'nilai tugas'
        console.log('>> ini tenary : ' + tenary)
        
        console.log('____________________________________________')        
        //looping
        for (let i = 0; i < 4; i++) {
            console.log('<< looping : ' + i)
            
        }

        console.log('____________________________________________')
        const fishes = ['hiu', 'koki', 'tongkol']
        for (const key in fishes) {
            console.log('ikan : ' + fishes[key])
        }

        console.log('Halo JS')
        console.log(pesan)
        console.log('iwak iwak ', fishes)        
        // alert('Iki Iklan')
        // alert('Ojo Ditutup to')
        // alert('Dikandani kok ngeyel')
        // alert('Yowes Karepmu nang')
        // alert('Suwun')   