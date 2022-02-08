const  torres = document.querySelector(".areaDoJogo")
let cont = 0
torres.addEventListener("click", movimentoTorres)


function movimentoTorres(event){
    let section = document.getElementById("tarja");
    let p = document.createElement('p')
    let tarja = document.querySelector('#tarja')
    const arrayTorreEs = document.getElementById('torreEsquerda').getElementsByClassName('marcado');
    const arrayTorreDi = document.getElementById('torreDireita').getElementsByClassName('marcado');
    const arrayTorreCe = document.getElementById('torreCentral').getElementsByClassName('marcado');
    
    
    const tEsquerda = arrayTorreEs[arrayTorreEs.length-1]
    const tDireita = arrayTorreDi[arrayTorreDi.length-1]
    const tCentral = arrayTorreCe[arrayTorreCe.length-1]
       
        const discoSelecionado = event.target
        
        if (discoSelecionado !== undefined){

            
            if (discoSelecionado.id !=="container"){
                    const tamanhoDisco = discoSelecionado.clientWidth
                    const idtorre = document.getElementById(discoSelecionado.id)
                    const escolhaDisco = document.defaultView.getComputedStyle(idtorre, null)['border-width']
                    const torrePai = document.getElementById(discoSelecionado.id).parentNode 
                    const arrayGeral = document.getElementById(idtorre.id).getElementsByClassName('marcado')
                    const arrayTorrePai = document.getElementById(torrePai.id).getElementsByTagName('button')
                    
                if(tamanhoDisco<=arrayTorrePai[arrayTorrePai.length-1].clientWidth){
                    
                    if(discoSelecionado.tagName==="BUTTON" && escolhaDisco ==="2px"){
                        
                        if(arrayTorreEs.length>0){
                            arrayTorreEs[arrayTorreEs.length-1].classList.remove('selecionado')
                            arrayTorreEs[arrayTorreEs.length-1].classList.add('disco')
                        }
                        if(arrayTorreCe.length>0){    
                        arrayTorreCe[arrayTorreCe.length-1].classList.remove('selecionado')
                        arrayTorreCe[arrayTorreCe.length-1].classList.add('disco')
                        }
                        if(arrayTorreDi.length>0){    
                        arrayTorreDi[arrayTorreDi.length-1].classList.remove('selecionado')
                        arrayTorreDi[arrayTorreDi.length-1].classList.add('disco')
                        }
                        document.getElementById(discoSelecionado.id).classList.remove('disco');
                        document.getElementById(discoSelecionado.id).classList.add('selecionado')
                    }
                    if(discoSelecionado.tagName==="BUTTON" && escolhaDisco ==="4px"){
                        document.getElementById(discoSelecionado.id).classList.remove('selecionado');
                        document.getElementById(discoSelecionado.id).classList.add('disco');
                        
                    }
                }
                else{
                    alert('Aviso!! Só é permitido mover os discos que estão no topo das torres')   
                }  
                
                if(arrayTorreEs.length> 0 && tEsquerda!== undefined){
                    if(tEsquerda.classList[1]==="selecionado" && discoSelecionado.classList[0]==='torre'){
                        if(arrayGeral.length===0){    
                            idtorre.appendChild(arrayTorreEs[arrayTorreEs.length-1])
                            arrayGeral[arrayGeral.length-1].classList.remove('selecionado');
                            arrayGeral[arrayGeral.length-1].classList.add('disco');
                            cont+=1
                        }
                        else if(arrayTorreEs[arrayTorreEs.length-1].clientWidth <= arrayGeral[arrayGeral.length-1].clientWidth){
                            idtorre.appendChild(arrayTorreEs[arrayTorreEs.length-1])
                            arrayGeral[arrayGeral.length-1].classList.remove('selecionado');
                            arrayGeral[arrayGeral.length-1].classList.add('disco');
                            cont+=1
                        } 
                        else{
                            alert('Nao é permitido colocar um disco maios sobre um menor')
                        }   
                    }           
                } 
                if(arrayTorreCe.length> 0 && tCentral!== undefined){
                    if(tCentral.classList[1]==="selecionado" && discoSelecionado.classList[0]==='torre'){
                        if(arrayGeral.length===0){    
                            idtorre.appendChild(arrayTorreCe[arrayTorreCe.length-1])
                            arrayGeral[arrayGeral.length-1].classList.remove('selecionado');
                            arrayGeral[arrayGeral.length-1].classList.add('disco');
                            cont+=1
                        }
                        else if(arrayTorreCe[arrayTorreCe.length-1].clientWidth <= arrayGeral[arrayGeral.length-1].clientWidth){
                            idtorre.appendChild(arrayTorreCe[arrayTorreCe.length-1])
                            arrayGeral[arrayGeral.length-1].classList.remove('selecionado');
                            arrayGeral[arrayGeral.length-1].classList.add('disco');
                            cont+=1
                        } 
                        else{
                            alert('Nao é permitido colocar um disco maios sobre um menor')
                        }   
                    }           
                } 
                if(arrayTorreDi.length> 0 && tDireita!== undefined){
                    if(tDireita.classList[1]==="selecionado" && discoSelecionado.classList[0]==='torre'){
                        if(arrayGeral.length===0){    
                            idtorre.appendChild(arrayTorreDi[arrayTorreDi.length-1])
                            arrayGeral[arrayGeral.length-1].classList.remove('selecionado');
                            arrayGeral[arrayGeral.length-1].classList.add('disco');
                            cont+=1
                        }
                        else if(arrayTorreDi[arrayTorreDi.length-1].clientWidth <= arrayGeral[arrayGeral.length-1].clientWidth){
                            idtorre.appendChild(arrayTorreDi[arrayTorreDi.length-1])
                            arrayGeral[arrayGeral.length-1].classList.remove('selecionado');
                            arrayGeral[arrayGeral.length-1].classList.add('disco');
                            cont+=1
                        } 
                        else{
                            alert('Nao é permitido colocar um disco maior sobre um menor')
                        }   
                    }           
                }   
            }
            if(arrayTorreDi.length===4){  
                stringCont = cont.toString()
                p.classList.add("parabens")
                tarja.innerHTML = 'parabens... concluido em ' + cont + ' vomimentos'
                section.classList.add('parabens');
                
                
            }            
        }
        
    }


