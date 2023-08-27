        function addToLocalStorage(event){
            event.preventDefault();
            let name = event.target.ourname.value;
            let email = event.target.emailour.value; // Corrected here
            let Phn = event.target.Ph_no.value;

            let obj = {
                Name : name,
                Email : email,
                Phone_No : Phn
            };
    
            localStorage.setItem(email,JSON.stringify(obj));
            showOnScreen(obj);
        }

        function showOnScreen(obj){
           let ul = document.querySelector("ul");
           let child = document.createElement("li");
           child.textContent = obj.Name + '--'+obj.Email + '--' + obj.Phone_No;
           

           let delt = document.createElement('input'); 
           delt.type ="button";
           delt.value = "DELETE";
           delt.style ="width : 100px"

           let edt = document.createElement("input");
           edt.type = "button";
           edt.value = "EDIT";
           edt.style = "width : 100px";

           delt.onclick = () => {
            localStorage.removeItem(obj.Email);
            ul.removeChild(child);
         }

         edt.onclick = () => {
            localStorage.removeItem(obj.Email);
            ul.removeChild(child);
            document.getElementById("name").value = obj.Name;
            document.getElementById("emailour").value = obj.Email;
            document.getElementById("phnno").value = obj.Phone_No;
         }
           child.appendChild(delt);
           child.appendChild(edt);
            ul.appendChild(child);
        }
    