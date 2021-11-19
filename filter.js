var filterInput = document.getElementById("filterInput");

        filterInput.addEventListener("keyup", filetNames);

        function filetNames(){
            var text = document.getElementById("filterInput").value.toLowerCase();
            var   ul = document.getElementById('names')
            var   li = ul.querySelectorAll('li.colllection-item')

            for (var i=0; i<li.length;i++) {
                var a = li[i].getElementsByTagName('a')[0];
                if (a.innerText.toLowerCase().indexOf(text) > -1){
                        li[i].style.display = ""
                }else{
                        li[i].style.display = "none"
                }
            }
        }