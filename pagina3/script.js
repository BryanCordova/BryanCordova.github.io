const terminal = document.getElementsByClassName("root")[0];
const body = document.getElementsByTagName("body")[0];
let newLine = document.createElement("p");
const skipBtn = document.querySelector(".control span");
terminal.appendChild(newLine);

let str = `“Puerto oculto :8080: hosting de entrada >Protocolo de túnel de sockets seguros (SST)
Habilitada: No
Dirección: No
Perfiles: Dentro
Dominio, Privada, Pública Protocolo de túnel de sockets seguros
Agrupamiento:
LocalIP: 192.168.70.52
RemoteIP: Cualquiera
Protocolo: LocalPort: TCP
Remote Port: 443
Cruce seguro del perímetro: Acción: No Permitir
Nombre de regla: Servicio de Net Logon (NP de entrada)
Habilitada: No
Dirección: Dentro
Perfiles: Dominio, Privada, Pública Servicio de Net Logon
Agrupamiento: LocalIP: 192.168.50.68 / 192.162.24.14
RemoteIP: Cualquiera
Protocolo: TCP
LocalPort: 445
Remote Port: No Cruce seguro del perímetro:
Acción: Permitir'” 
`
sayItSlowly('Bryan', "Cordova07", str);

function sayItSlowly(user, place, str){
  let username = `${user}@${place}:~$`;
  let arr = `${username}${str}`.split("");
  let counter = 0;
  let isPaused = false;

  let interval = setInterval(function(){
    if (!isPaused) {
      printChar(arr[counter]);
      counter++;   
    }

    if (counter === arr.length) {
      clearInterval(interval);
      skipBtn.textContent = "Crackear.";
      skipBtn.classList.remove("hidden");
      skipBtn.addEventListener("click", () => {
        newLine.textContent = ""
        sayItSlowly(user, place, str)
      })
    }

    if (terminal.clientHeight > (body.clientHeight/2)) {
      if(arr[counter] === " "){
        // toggle alway toggling and wont stop, we need to toggle skipBTN outside interval
        isPaused = true;
        skipBtn.classList.remove("hidden");
        
        skipBtn.addEventListener("click", function(){
          newLine.textContent = `${username}`;
          skipBtn.classList.add("hidden");
          isPaused = false;
      })
      }
    }
  }, 50)
}


function pause(){
  clearInterval(interval);
}

function printChar(char){
  newLine.textContent += char;
}